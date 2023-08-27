import {ConfigService} from "./config.service";

export const appInitializerFn = (configService: ConfigService) => {
  return () => {
    return configService.setConfig();
  };
};
