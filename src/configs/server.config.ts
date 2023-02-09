import * as config from 'config';

interface IServerConfig {
  port: string;
  stage: string;
}

export const serverSettings = config.get<IServerConfig>('server');
