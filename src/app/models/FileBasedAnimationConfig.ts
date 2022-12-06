import { AnimationConfig } from "./AnimationConfig";
import { FileBasedAvatarFiles } from "./FileBasedAvatarFiles";


export interface FileBasedAnimationConfig extends AnimationConfig {
    type: 'file-based';
    endingPosition?: string;
    startingPosition?: string;
    avatars: { [id: string]: FileBasedAvatarFiles; };
    supportedAvatars: string[];
}
