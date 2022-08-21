import { environment } from './environment';
import { ConfigType, registerAs } from '@nestjs/config';

const config = registerAs('app', () => environment);
export type AppConfig = ConfigType<typeof config>;
export default config;
