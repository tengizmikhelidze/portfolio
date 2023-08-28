import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {AppConfig} from "./app-config";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private configuration!: AppConfig;

  constructor(
    private httpClient: HttpClient
  ) { }

  setConfig(): Promise<void | AppConfig> {
    return this.httpClient
      .get<AppConfig>('config.json')
      .toPromise()
      .then(config => {
        this.configuration = config as AppConfig;
        for(let key in this.configuration){
          // @ts-ignore
          environment[key as keyof AppConfig] = this.configuration[key as keyof AppConfig]
        }
      });
  }

  readConfig(): AppConfig {
    return this.configuration;
  }
}
