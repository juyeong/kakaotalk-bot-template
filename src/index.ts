import {IProfileImage, IReplier} from "./utils/default_util";

export default function response(
  room: string, message: string, sender: string, isGroupChat: boolean,
  replier: IReplier, imageDb?: IProfileImage, packageName?: string) {
  if (message === "test") {
    replier.reply("success");
  }
}
