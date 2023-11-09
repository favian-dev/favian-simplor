You can leave a standardized log on the console using `SplLogger`.

`SplLogger` is displayed only in the browser's console.

```typescript
import { SplLogger } from '@favian/simplor';

const logger = new SplLogger('Context');

logger.debug('Debug level is 0');
logger.log('Log level is 1');
logger.info('Info level is 2');
logger.warn('Warn level is 3');
logger.error('Error level is 4');
```

You can set the log level you want to display by calling the `setSplLogLevel()` function.

Since the log level is saved in LocalStorage, it only works when the platform is a browser.


```typescript
import { setSplLogLevel } from '@favian/simplor';

setSplLogLevel('debug'); // debug, log, info, warn, error
setSplLogLevel('log'); // log, info, warn, error
setSplLogLevel('info'); // info, warn, error
setSplLogLevel('warn'); // warn, error
setSplLogLevel('error'); // error
```
