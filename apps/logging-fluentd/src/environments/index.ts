import { environment } from './environment';
// import { registerAs } from '@nestjs/config';

// export default registerAs('app', () => environment);
export default () => (environment);
