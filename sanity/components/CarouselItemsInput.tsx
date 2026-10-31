import React, { useState, useEffect, useRef } from 'react';
import { ArrayOfObjectsInputProps, set, unset, useClient } from 'sanity';
import {
  Card,
  Stack,
  Flex,
  Box,
  Text,
  TextInput,
  TextArea,
  Button,
  Grid,
  Dialog,
  Spinner,
} from '@sanity/ui';
import {
  AddIcon,
  TrashIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  ImageIcon,
  UploadIcon,
  SearchIcon,
  CloseIcon,
  CheckmarkIcon,
} from '@sanity/icons';

interface SlideItem {
  _key: string;
  _type?: string;
  asset?: {
    _type: 'reference';
    _ref: string;
  };
  alt?: string;
  badge?: string;
  title?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
}

interface ImageOption {
  _id: string;
  url: string;
  originalFilename?: string;
  extension?: string;
}

function getSanityImageUrl(ref?: string, projectId = 'zabzj0uf', dataset = 'production'): string | null {
  if (!ref) return null;
  const match = ref.match(/^image-([a-f0-9]+)-([0-9x]+)-([a-z0-9]+)$/);
  if (!match) return null;
  const [, id, dimensions, extension] = match;
  return `https://cdn.sanity.io/images/${projectId}/${dataset}/${id}-${dimensions}.${extension}`;
}

export function CarouselItemsInput(props: ArrayOfObjectsInputProps) {
  const { value, onChange } = props;
  const items = (value as SlideItem[]) || [];
  const client = useClient({ apiVersion: '2024-01-01' });

  const [uploadingKey, setUploadingKey] = useState<string | null>(null);
  const [browserTargetKey, setBrowserTargetKey] = useState<string | null>(null);
  const [existingAssets, setExistingAssets] = useState<ImageOption[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loadingAssets, setLoadingAssets] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const activeUploadTargetRef = useRef<string | null>(null);

  // Load existing assets when asset picker modal is opened
  useEffect(() => {
    if (!browserTargetKey) return;
    setLoadingAssets(true);
    client
      .fetch<ImageOption[]>(
        `*[_type == "sanity.imageAsset"] | order(_createdAt desc)[0..40] { _id, url, originalFilename, extension }`
      )
      .then((data) => {
        setExistingAssets(data || []);
        setLoadingAssets(false);
      })
      .catch((err) => {
        console.error('Failed to fetch image assets:', err);
        setLoadingAssets(false);
      });
  }, [browserTargetKey, client]);

  // Handle Add Slide
  const handleAddSlide = () => {
    const newSlide: SlideItem = {
      _key: Math.random().toString(36).substring(2, 11),
      _type: 'slide',
      alt: '',
      badge: '',
      title: '',
      description: '',
      ctaText: '',
      ctaLink: '',
    };
    onChange(items.length > 0 ? set([...items, newSlide]) : set([newSlide]));
  };

  // Handle Delete Slide
  const handleRemoveSlide = (key: string) => {
    const next = items.filter((item) => item._key !== key);
    onChange(next.length > 0 ? set(next) : unset());
  };

  // Handle Reorder
  const handleMove = (index: number, direction: 'up' | 'down') => {
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= items.length) return;
    const next = [...items];
    const temp = next[index];
    next[index] = next[targetIndex];
    next[targetIndex] = temp;
    onChange(set(next));
  };

  // Handle inline field edits
  const handleFieldChange = (key: string, fieldName: keyof SlideItem, fieldValue: string) => {
    const next = items.map((item) =>
      item._key === key ? { ...item, [fieldName]: fieldValue } : item
    );
    onChange(set(next));
  };

  // Trigger file upload for a specific slide
  const triggerFileUpload = (key: string) => {
    activeUploadTargetRef.current = key;
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
      fileInputRef.current.click();
    }
  };

  // Process file upload
  const handleFileSelected = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const targetKey = activeUploadTargetRef.current;
    if (!file || !targetKey) return;

    setUploadingKey(targetKey);
    try {
      const assetDoc = await client.assets.upload('image', file, {
        filename: file.name,
        contentType: file.type,
      });

      const next = items.map((item) =>
        item._key === targetKey
          ? {
              ...item,
              asset: {
                _type: 'reference' as const,
                _ref: assetDoc._id,
              },
            }
          : item
      );
      onChange(set(next));
    } catch (err) {
      console.error('Image upload failed:', err);
    } finally {
      setUploadingKey(null);
      activeUploadTargetRef.current = null;
    }
  };

  // Process selecting existing image asset
  const handleSelectAsset = (assetId: string) => {
    if (!browserTargetKey) return;
    const next = items.map((item) =>
      item._key === browserTargetKey
        ? {
            ...item,
            asset: {
              _type: 'reference' as const,
              _ref: assetId,
            },
          }
        : item
    );
    onChange(set(next));
    setBrowserTargetKey(null);
  };

  const filteredAssets = existingAssets.filter((asset) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      (asset.originalFilename && asset.originalFilename.toLowerCase().includes(q)) ||
      asset._id.toLowerCase().includes(q)
    );
  });

  return (
    <Stack space={4}>
      {/* Hidden file input for direct computer uploads */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileSelected}
        accept="image/webp,image/png,image/jpeg,image/gif"
        style={{ display: 'none' }}
      />

      {items.length === 0 && (
        <Card padding={4} radius={2} tone="caution" border>
          <Text size={1} weight="medium">
            No slides yet. Click below to add your first slide.
          </Text>
        </Card>
      )}

      {items.map((item, idx) => {
        const imageUrl = getSanityImageUrl(item.asset?._ref);
        const isUploading = uploadingKey === item._key;

        return (
          <Card
            key={item._key}
            padding={3}
            radius={2}
            border
            style={{
              backgroundColor: '#131722',
              borderColor: '#2D3748',
            }}
          >
            <Stack space={3}>
              {/* Header: Slide Number + Move & Delete Controls */}
              <Flex align="center" justify="space-between">
                <Flex align="center" gap={2}>
                  <Card padding={1} radius={2} style={{ backgroundColor: '#FFB020' }}>
                    <Text size={1} weight="bold" style={{ color: '#060B22' }}>
                      Slide {String(idx + 1).padStart(2, '0')}
                    </Text>
                  </Card>
                  {item.title && (
                    <Text size={1} weight="semibold" textOverflow="ellipsis">
                      {item.title}
                    </Text>
                  )}
                </Flex>

                <Flex gap={1}>
                  <Button
                    mode="ghost"
                    icon={ArrowUpIcon}
                    disabled={idx === 0}
                    onClick={() => handleMove(idx, 'up')}
                    title="Move slide up"
                    aria-label="Move slide up"
                    fontSize={1}
                    padding={2}
                  />
                  <Button
                    mode="ghost"
                    icon={ArrowDownIcon}
                    disabled={idx === items.length - 1}
                    onClick={() => handleMove(idx, 'down')}
                    title="Move slide down"
                    aria-label="Move slide down"
                    fontSize={1}
                    padding={2}
                  />
                  <Button
                    tone="critical"
                    mode="bleed"
                    icon={TrashIcon}
                    onClick={() => handleRemoveSlide(item._key)}
                    title="Delete slide"
                    aria-label="Delete slide"
                    fontSize={1}
                    padding={2}
                  />
                </Flex>
              </Flex>

              {/* Two Column Layout: Image on Left, Fields on Right */}
              <Grid columns={[1, 1, 3]} gap={3}>
                {/* Column 1: Image Preview & Uploader (1 col) */}
                <Box>
                  <Card
                    padding={2}
                    radius={2}
                    border
                    style={{
                      backgroundColor: '#0A0E1A',
                      borderColor: '#1E293B',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      minHeight: '140px',
                    }}
                  >
                    {isUploading ? (
                      <Stack space={2} align="center">
                        <Spinner />
                        <Text size={1} muted>
                          Uploading...
                        </Text>
                      </Stack>
                    ) : imageUrl ? (
                      <Stack space={2} style={{ width: '100%', alignItems: 'center' }}>
                        <img
                          src={imageUrl}
                          alt={item.alt || 'Slide preview'}
                          style={{
                            maxWidth: '100%',
                            maxHeight: '120px',
                            objectFit: 'contain',
                            borderRadius: '4px',
                          }}
                        />
                        <Flex gap={1} wrap="wrap" justify="center">
                          <Button
                            fontSize={1}
                            padding={2}
                            mode="ghost"
                            text="Upload New"
                            onClick={() => triggerFileUpload(item._key)}
                          />
                          <Button
                            fontSize={1}
                            padding={2}
                            mode="ghost"
                            text="Media Library"
                            onClick={() => setBrowserTargetKey(item._key)}
                          />
                        </Flex>
                      </Stack>
                    ) : (
                      <Stack space={2} align="center" padding={2}>
                        <ImageIcon style={{ fontSize: 28, color: '#64748B' }} />
                        <Text size={1} muted align="center">
                          No image selected
                        </Text>
                        <Flex gap={1} wrap="wrap" justify="center">
                          <Button
                            tone="primary"
                            fontSize={1}
                            padding={2}
                            text="Upload"
                            icon={UploadIcon}
                            onClick={() => triggerFileUpload(item._key)}
                          />
                          <Button
                            fontSize={1}
                            padding={2}
                            mode="ghost"
                            text="Media Library"
                            onClick={() => setBrowserTargetKey(item._key)}
                          />
                        </Flex>
                      </Stack>
                    )}
                  </Card>
                </Box>

                {/* Column 2 & 3: Inline Form Inputs (2 cols) */}
                <Box style={{ gridColumn: 'span 2' }}>
                  <Stack space={3}>
                    {/* Alt Text */}
                    <Stack space={1}>
                      <Flex align="center" justify="space-between">
                        <Text size={1} weight="semibold">
                          Alternative Text (Alt Text)*
                        </Text>
                        <Text size={0} muted>
                          Crucial for SEO
                        </Text>
                      </Flex>
                      <TextInput
                        value={item.alt || ''}
                        onChange={(e) =>
                          handleFieldChange(item._key, 'alt', e.currentTarget.value)
                        }
                        placeholder="e.g. Screenshot of high-converting Meta Ad creative"
                      />
                    </Stack>

                    {/* Badge + Slide Title */}
                    <Grid columns={[1, 2]} gap={2}>
                      <Stack space={1}>
                        <Text size={1} weight="semibold">
                          Badge Label (Optional)
                        </Text>
                        <TextInput
                          value={item.badge || ''}
                          onChange={(e) =>
                            handleFieldChange(item._key, 'badge', e.currentTarget.value)
                          }
                          placeholder="e.g. ROAS +420% or Step 01"
                        />
                      </Stack>

                      <Stack space={1}>
                        <Text size={1} weight="semibold">
                          Slide Title (Optional)
                        </Text>
                        <TextInput
                          value={item.title || ''}
                          onChange={(e) =>
                            handleFieldChange(item._key, 'title', e.currentTarget.value)
                          }
                          placeholder="e.g. Dynamic Product Ads"
                        />
                      </Stack>
                    </Grid>

                    {/* Description */}
                    <Stack space={1}>
                      <Text size={1} weight="semibold">
                        Slide Description / Caption (Optional)
                      </Text>
                      <TextArea
                        value={item.description || ''}
                        onChange={(e) =>
                          handleFieldChange(item._key, 'description', e.currentTarget.value)
                        }
                        rows={2}
                        placeholder="e.g. Generated $140k in 30 days using UGC video overlays."
                      />
                    </Stack>

                    {/* CTA Label & Link */}
                    <Grid columns={[1, 2]} gap={2}>
                      <Stack space={1}>
                        <Text size={1} weight="semibold">
                          CTA Button Label (Optional)
                        </Text>
                        <TextInput
                          value={item.ctaText || ''}
                          onChange={(e) =>
                            handleFieldChange(item._key, 'ctaText', e.currentTarget.value)
                          }
                          placeholder="e.g. View Live Strategy"
                        />
                      </Stack>

                      <Stack space={1}>
                        <Text size={1} weight="semibold">
                          CTA Button Link (Optional)
                        </Text>
                        <TextInput
                          value={item.ctaLink || ''}
                          onChange={(e) =>
                            handleFieldChange(item._key, 'ctaLink', e.currentTarget.value)
                          }
                          placeholder="e.g. /get-a-quote or https://..."
                        />
                      </Stack>
                    </Grid>
                  </Stack>
                </Box>
              </Grid>
            </Stack>
          </Card>
        );
      })}

      {/* Add New Slide Button */}
      <Button
        tone="primary"
        mode="ghost"
        icon={AddIcon}
        text="Add Slide to Carousel"
        onClick={handleAddSlide}
        style={{ width: '100%' }}
      />

      {/* Select Image from Library Dialog */}
      {browserTargetKey && (
        <Dialog
          id="media-library-browser"
          header="Select Image from Sanity Library"
          onClose={() => setBrowserTargetKey(null)}
          width={2}
        >
          <Box padding={4}>
            <Stack space={3}>
              <TextInput
                icon={SearchIcon}
                placeholder="Search uploaded images by filename..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.currentTarget.value)}
              />

              {loadingAssets ? (
                <Flex justify="center" padding={5}>
                  <Spinner />
                </Flex>
              ) : (
                <Grid columns={[2, 3, 4]} gap={3} style={{ maxHeight: '420px', overflowY: 'auto' }}>
                  {filteredAssets.map((asset) => (
                    <Card
                      key={asset._id}
                      padding={2}
                      radius={2}
                      border
                      style={{ cursor: 'pointer', textAlign: 'center' }}
                      onClick={() => handleSelectAsset(asset._id)}
                    >
                      <Stack space={2} align="center">
                        <img
                          src={`${asset.url}?h=140&fit=max`}
                          alt={asset.originalFilename || 'Asset'}
                          style={{
                            maxWidth: '100%',
                            maxHeight: '100px',
                            objectFit: 'contain',
                            borderRadius: '4px',
                          }}
                        />
                        <Text size={0} textOverflow="ellipsis">
                          {asset.originalFilename || asset.extension}
                        </Text>
                      </Stack>
                    </Card>
                  ))}
                </Grid>
              )}

              <Flex justify="flex-end">
                <Button mode="ghost" text="Cancel" onClick={() => setBrowserTargetKey(null)} />
              </Flex>
            </Stack>
          </Box>
        </Dialog>
      )}
    </Stack>
  );
}
