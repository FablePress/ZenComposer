<?php

namespace FablePress\ZenComposer;

class ZenComposer
{
    /**
     * Publish editor assets to the specified target directory.
     *
     * @param string $targetDir Absolute path to the public assets directory (e.g. public/assets/vendor/fablepress-editor)
     * @return bool True on success, false on failure.
     */
    public static function publishAssets(string $targetDir): bool
    {
        $sourceDir = dirname(__DIR__) . '/resources';

        if (!is_dir($sourceDir)) {
            return false;
        }

        return self::copyDirectory($sourceDir, $targetDir);
    }

    /**
     * Recursively copy a directory.
     */
    private static function copyDirectory(string $src, string $dst): bool
    {
        if (!is_dir($dst)) {
            if (!mkdir($dst, 0755, true)) {
                return false;
            }
        }

        $dir = opendir($src);
        if (!$dir) {
            return false;
        }

        while (($file = readdir($dir)) !== false) {
            if ($file === '.' || $file === '..') {
                continue;
            }

            $srcFile = $src . '/' . $file;
            $dstFile = $dst . '/' . $file;

            if (is_dir($srcFile)) {
                if (!self::copyDirectory($srcFile, $dstFile)) {
                    closedir($dir);
                    return false;
                }
            } else {
                if (!copy($srcFile, $dstFile)) {
                    closedir($dir);
                    return false;
                }
            }
        }

        closedir($dir);
        return true;
    }
}
