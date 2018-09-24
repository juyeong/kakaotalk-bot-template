import {IApi, IBridge, IDatabase, IDevice, IFileStream, ILog} from "./default_util";

export const API = safeEval("Api") as IApi;
export const LOG = safeEval("Log") as ILog;
export const DATABASE = safeEval("DataBase") as IDatabase;
export const BRIDGE = safeEval("Bridge") as IBridge;
export const DEVICE = safeEval("Device") as IDevice;
export const FILESYSTEM = safeEval("FileStream") as IFileStream;

function safeEval(x: string): any {
  try {
    return eval(x);
  } catch (e) {
    // ignore
  }
}
