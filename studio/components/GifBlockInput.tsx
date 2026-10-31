import React, { useState, useEffect, useRef } from 'react';
import { set, useClient } from 'sanity';
import {
  Card,
  Stack,
  Flex,
  Box,
  Text,
  TextInput,
  Button,
  Grid,
  Dialog,
  Spinner,
} from '@sanity/ui';
import {
  UploadIcon,
  SearchIcon,
  ImageIcon,
  TrashIcon,
  LinkIcon,
  CheckmarkIcon,
} from '@sanity/icons';

interface GifBlockValue {
  _key?: string;
  _type?: string;
  sourceType?: 'file' | 'url';
  gifFile?: {
    _type?: 'image';
    asset?: {
      _type: 'reference';
      _ref: string;
    };
  };
  gifUrl?: string;
  alt?: string;
  caption?: string;
  badge?: string;
  size?: 'compact' | 'standard' | 'wide';
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

export function GifBlockInput(props: any) {
  const { value, onChange } = props;
  const val: GifBlockValue = value || {};
  const client = useClient({ apiVersion: '2024-01-01' });

  const sourceType = val.sourceType || 'file';
  const size = val.size || 'standard';

  const [isUploading, setIsUploading] = useState(false);
  const [showAssetBrowser, setShowAssetBrowser] = useState(false);
  const [existingAssets, setExistingAssets] = useState<ImageOption[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loadingAssets, setLoadingAssets] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load existing assets when browser is opened
  useEffect(() => {
    if (!showAssetBrowser) return;
    setLoadingAssets(true);
    client
      .fetch<ImageOption[]>(
        `*[_type == "sanity.imageAsset"] | order(_createdAt desc)[0..40] { _id, url, originalFilename, extension }`
      )
      .then((data: ImageOption[]) => {
        setExistingAssets(data || []);
        setLoadingAssets(false);
      })
      .catch((err: unknown) => {
        console.error('Failed to fetch image assets:', err);
        setLoadingAssets(false);
      });
  }, [showAssetBrowser, client]);

  // Handle generic field change
  const handleChange = (fieldName: keyof GifBlockValue, fieldValue: any) => {
    const next: GifBlockValue = {
      ...val,
      [fieldName]: fieldValue,
    };
    onChange(set(next));
  };

  // Trigger file picker
  const triggerFileUpload = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
      fileInputRef.current.click();
    }
  };

  // Direct asset upload avoiding deep patch progress bugs
  const handleFileSelected = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    try {
      const assetDoc = await client.assets.upload('image', file, {
        filename: file.name,
        contentType: file.type,
      });

      const next: GifBlockValue = {
        ...val,
        sourceType: 'file',
        gifFile: {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: assetDoc._id,
          },
        },
      };
      onChange(set(next));
    } catch (err: unknown) {
      console.error('GIF upload failed:', err);
    } finally {
      setIsUploading(false);
    }
  };

  // Select an existing asset
  const handleSelectAsset = (assetId: string) => {
    const next: GifBlockValue = {
      ...val,
      sourceType: 'file',
      gifFile: {
        _type: 'image',
        asset: {
          _type: 'reference',
          _ref: assetId,
        },
      },
    };
    onChange(set(next));
    setShowAssetBrowser(false);
  };

  // Remove attached GIF
  const handleRemoveAsset = () => {
    const next: GifBlockValue = {
      ...val,
      gifFile: undefined,
    };
    onChange(set(next));
  };

  // Resolve current preview URL
  const uploadedUrl = getSanityImageUrl(val.gifFile?.asset?._ref);
  const activeUrl = sourceType === 'url' ? val.gifUrl : uploadedUrl;

  const filteredAssets = existingAssets.filter((asset) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      (asset.originalFilename && asset.originalFilename.toLowerCase().includes(q)) ||
      asset.extension?.toLowerCase().includes(q) ||
      asset._id.toLowerCase().includes(q)
    );
  });

  return (
    <Stack space={4}>
      {/* Hidden file input */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileSelected}
        accept="image/gif,image/webp,image/png,image/jpeg"
        style={{ display: 'none' }}
      />

      {/* 1. Source Type Tabs */}
      <Stack space={2}>
        <Text size={1} weight="semibold">
          GIF Source
        </Text>
        <Flex gap={2}>
          <Button
            mode={sourceType === 'file' ? 'default' : 'ghost'}
            tone={sourceType === 'file' ? 'primary' : 'default'}
            text="Upload GIF File"
            icon={UploadIcon}
            onClick={() => handleChange('sourceType', 'file')}
          />
          <Button
            mode={sourceType === 'url' ? 'default' : 'ghost'}
            tone={sourceType === 'url' ? 'primary' : 'default'}
            text="Paste External GIF URL"
            icon={LinkIcon}
            onClick={() => handleChange('sourceType', 'url')}
          />
        </Flex>
      </Stack>

      {/* 2. Media Selector Area */}
      {sourceType === 'file' ? (
        <Card
          padding={3}
          radius={2}
          border
          style={{
            backgroundColor: '#0F172A',
            borderColor: '#334155',
          }}
        >
          <Stack space={3} align="center">
            {isUploading ? (
              <Stack space={2} align="center" padding={4}>
                <Spinner />
                <Text size={1} muted>
                  Uploading GIF file to Sanity CDN...
                </Text>
              </Stack>
            ) : uploadedUrl ? (
              <Stack space={3} align="center" style={{ width: '100%' }}>
                <img
                  src={uploadedUrl}
                  alt={val.alt || 'Attached GIF'}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '260px',
                    borderRadius: '8px',
                    objectFit: 'contain',
                    backgroundColor: '#020617',
                  }}
                />
                <Flex gap={2} wrap="wrap" justify="center">
                  <Button
                    fontSize={1}
                    padding={2}
                    mode="ghost"
                    text="Upload Replacement"
                    icon={UploadIcon}
                    onClick={triggerFileUpload}
                  />
                  <Button
                    fontSize={1}
                    padding={2}
                    mode="ghost"
                    text="Choose from Library"
                    onClick={() => setShowAssetBrowser(true)}
                  />
                  <Button
                    tone="critical"
                    fontSize={1}
                    padding={2}
                    mode="bleed"
                    text="Remove"
                    icon={TrashIcon}
                    onClick={handleRemoveAsset}
                  />
                </Flex>
              </Stack>
            ) : (
              <Stack space={2} align="center" padding={4}>
                <ImageIcon style={{ fontSize: 36, color: '#94A3B8' }} />
                <Text size={1} weight="medium" align="center">
                  No GIF file attached yet
                </Text>
                <Text size={0} muted align="center">
                  Upload an animated .gif or .webp file directly from your computer, or pick from recent uploads.
                </Text>
                <Flex gap={2} style={{ marginTop: '8px' }}>
                  <Button
                    tone="primary"
                    text="Upload GIF File"
                    icon={UploadIcon}
                    onClick={triggerFileUpload}
                  />
                  <Button
                    mode="ghost"
                    text="Media Library"
                    onClick={() => setShowAssetBrowser(true)}
                  />
                </Flex>
              </Stack>
            )}
          </Stack>
        </Card>
      ) : (
        <Stack space={2}>
          <Text size={1} weight="semibold">
            Direct External GIF URL
          </Text>
          <TextInput
            placeholder="https://media.giphy.com/media/.../giphy.gif"
            value={val.gifUrl || ''}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChange('gifUrl', e.currentTarget.value)
            }
          />
          {val.gifUrl && (
            <Card padding={2} radius={2} border style={{ backgroundColor: '#020617' }}>
              <Flex justify="center">
                <img
                  src={val.gifUrl}
                  alt={val.alt || 'External GIF Preview'}
                  style={{ maxHeight: '220px', maxWidth: '100%', objectFit: 'contain' }}
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
              </Flex>
            </Card>
          )}
        </Stack>
      )}

      {/* 3. Text Fields: Alt, Caption, Badge */}
      <Stack space={3}>
        <Stack space={1}>
          <Flex align="center" justify="space-between">
            <Text size={1} weight="semibold">
              Alternative Text (Alt Text)*
            </Text>
            <Text size={0} muted>
              Crucial for SEO & Screen Readers
            </Text>
          </Flex>
          <TextInput
            placeholder="e.g. Marketing manager celebrating positive ROAS results"
            value={val.alt || ''}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChange('alt', e.currentTarget.value)
            }
          />
        </Stack>

        <Stack space={1}>
          <Text size={1} weight="semibold">
            Caption (Optional)
          </Text>
          <TextInput
            placeholder="e.g. Actual footage of our squad after cutting CPL by 40% in week 2."
            value={val.caption || ''}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChange('caption', e.currentTarget.value)
            }
          />
        </Stack>

        <Grid columns={[1, 2]} gap={3}>
          <Stack space={1}>
            <Text size={1} weight="semibold">
              Badge Label (Optional)
            </Text>
            <TextInput
              placeholder="e.g. MEME, REACTION, QUICK DEMO, 2026 TREND"
              value={val.badge || ''}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange('badge', e.currentTarget.value)
              }
            />
          </Stack>

          <Stack space={1}>
            <Text size={1} weight="semibold">
              Display Width
            </Text>
            <Flex gap={2}>
              {(['compact', 'standard', 'wide'] as const).map((s) => (
                <Button
                  key={s}
                  fontSize={1}
                  padding={2}
                  mode={size === s ? 'default' : 'ghost'}
                  tone={size === s ? 'primary' : 'default'}
                  text={s.charAt(0).toUpperCase() + s.slice(1)}
                  onClick={() => handleChange('size', s)}
                />
              ))}
            </Flex>
          </Stack>
        </Grid>
      </Stack>

      {/* Asset Browser Modal */}
      {showAssetBrowser && (
        <Dialog
          id="gif-asset-browser"
          header="Select GIF or Image from Sanity Library"
          onClose={() => setShowAssetBrowser(false)}
          width={2}
        >
          <Box padding={4}>
            <Stack space={3}>
              <TextInput
                icon={SearchIcon}
                placeholder="Search uploaded GIFs by filename..."
                value={searchQuery}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setSearchQuery(e.currentTarget.value)
                }
              />

              {loadingAssets ? (
                <Flex justify="center" padding={5}>
                  <Spinner />
                </Flex>
              ) : (
                <Grid columns={[2, 3, 4]} gap={3} style={{ maxHeight: '420px', overflowY: 'auto' }}>
                  {filteredAssets.map((asset) => {
                    const isGif = asset.extension === 'gif';
                    return (
                      <Card
                        key={asset._id}
                        padding={2}
                        radius={2}
                        border
                        style={{
                          cursor: 'pointer',
                          textAlign: 'center',
                          borderColor: isGif ? '#FFB020' : undefined,
                        }}
                        onClick={() => handleSelectAsset(asset._id)}
                      >
                        <Stack space={2} align="center">
                          <img
                            src={asset.url}
                            alt={asset.originalFilename || 'Asset'}
                            style={{
                              maxWidth: '100%',
                              maxHeight: '100px',
                              objectFit: 'contain',
                              borderRadius: '4px',
                            }}
                          />
                          <Text size={0} textOverflow="ellipsis">
                            {isGif ? `🎬 ${asset.originalFilename || 'GIF'}` : asset.originalFilename || asset.extension}
                          </Text>
                        </Stack>
                      </Card>
                    );
                  })}
                </Grid>
              )}

              <Flex justify="flex-end">
                <Button mode="ghost" text="Cancel" onClick={() => setShowAssetBrowser(false)} />
              </Flex>
            </Stack>
          </Box>
        </Dialog>
      )}
    </Stack>
  );
}

