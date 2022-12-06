import { FileMetadata } from "./FileMetadata";


export interface FileBasedAvatarFiles {
    fbx?: {
        raw: FileMetadata;
        clean: FileMetadata;
    };
    webp?: {
        [resolution: string]: FileMetadata;
    };
}
