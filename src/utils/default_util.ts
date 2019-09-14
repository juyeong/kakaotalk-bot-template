export interface IProfileImage {
  getProfileImage(): string;

  getProfileBase64(): string;

  getProfileBitmap(): any; // android.graphics.Bitmap.class
}

export interface IReplier {
  reply(message: string);

  reply(room: string, message: string);
}

export interface IApi {
  UIThread(callback1: () => void, callback2: () => void): void;

  canReply(room: string): boolean;

  getContext(): any; // android.content.Context.class

  prepare(script: string): number;

  compile(script?: string, hideToast?: boolean): boolean;

  reload(script?: string, hideToast?: boolean): boolean;

  unload(script: string): boolean;

  // tslint:disable-next-line:adjacent-overload-signatures
  compile(script: string, hideToast: boolean): boolean;

  off(script?: string): boolean;

  on(script?: string): boolean;

  isOn(script: string): boolean;

  isCompiled(script: string): boolean;

  isCompiling(script: string): boolean;

  getScriptNames(): string[];

  replyRoom(room: string, message: string, hideToast?: boolean): boolean;

  showToast(title: string, content: string);

  makeNoti(title: string, content: string, id: number);

  papagoTranslate(sourceLanguage: string, targetLanguage: string, content: string, errorToString?: boolean): string;

  gc();
}

export interface IUtil {
  getWebText(url: string): string;

  parse(url: string): any; // org.jsoup.Jsoup.class
}

export interface ILog {
  error(message: string, toast?: boolean);

  info(message: string);

  debug(message: string);

  getDebugLength(): number;

  getErrorLength(): number;

  getInfoLength(): number;

  getLength(): number;
}

export interface IAppData {
  getInt(key: string): number;

  putInt(key: string, value: number);

  getBoolean(key: string): boolean;

  putBoolean(key: string, value: boolean);

  getString(key: string): string;

  putString(key: string, value: string);

  remove(key: string);

  clear();
}

export interface IDatabase {
  getDataBase(filename: string): string;

  setDataBase(filename: string, content: string): string;

  appendDataBase(filename: string, content: string): string;

  removeDataBase(filename: string): boolean;
}

export interface IBridge {
  getScopeOf(script: string): any; // org.mozilla.javascript.ScriptableObject

  isAllowed(script: string): boolean;
}

export interface IDevice {
  getBuild(): string;

  getAndroidVersionCode(): string;

  getAndroidVersionName(): string;

  getPhoneBrand(): string;

  getPhoneModel(): string;

  isCharging(): boolean;

  getPlugType(): string;

  getBatteryLevel(): string;

  getBatteryHealth(): string;

  getBatteryTemperature(): string;

  getBatteryVoltage(): string;

  getBatteryStatus(): string;

  getBatteryIntent(): string;
}

export interface IFileStream {
  read(path: string): string;

  write(path: string, content: string): string;

  append(path: string, content: string): string;

  remove(path: string): boolean;
}
