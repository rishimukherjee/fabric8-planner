import { browser } from 'protractor';
import { debug, info } from '../support';

export class Logging {
  name: string = '';

  log(action: string, ...msg: string[]) {
    let className = this.constructor.name;
    info(`${action}: ${browser.browserName} ${className}('${this.name}')`, ...msg);
  }

  debug(context: string, ...msg: string[]) {
    let className = this.constructor.name;
    debug(`${browser.browserName} ${className}('${this.name}'): ${context}`, ...msg);
  }

  fail(action: string, ...msg: string[]) {
    let className = this.constructor.name;
    /* to display errors in red */
    console.error('\x1b[31m%s', `${action}: ${browser.browserName} ${className}('${this.name}')`, ...msg, '\x1b[0m');
  }
}
