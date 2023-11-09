import { isPlatformBrowser } from '@angular/common';
import { inject, PLATFORM_ID } from '@angular/core';

/** A key for the log level to set in LocalStorage. */
export const SPL_LOG_LEVEL_KEY = 'spl-log-level';

/** An enumeration type containing configurable log level information. */
export enum SplLogLevel {
  debug,
  log,
  info,
  warn,
  error,
}

/** Logger that creates formatted log for Simplor. */
export class SplLogger {
  /** Unique id of logger. */
  readonly id = `${(Math.random() * 100000000).toString(16).substring(0, 5)}`;

  /** A platform id of the application. */
  private readonly _platformId: Object;

  constructor(private _context: string) {
    this._platformId = inject(PLATFORM_ID);
  }

  /** Returns true when the platform on which the application is running is browser. */
  get isPlatformBrowser(): boolean {
    return isPlatformBrowser(this._platformId);
  }

  /**
   * Create a log level log.
   * @param message - Message to display.
   * @param data - Data to display.
   */
  log(message: any, data?: any): void {
    this._createLog('log', this._buildLogMessage('log', message), data);
  }

  /**
   * Create a info level log.
   * @param message - Message to display.
   * @param data - Data to display.
   */
  info(message: any, data?: any): void {
    this._createLog('info', this._buildLogMessage('info', message), data);
  }

  /**
   * Create a warn level log.
   * @param message - Message to display.
   * @param data - Data to display.
   */
  warn(message: any, data?: any): void {
    this._createLog('warn', this._buildLogMessage('warn', message), data);
  }

  /**
   * Create a error level log.
   * @param message - Message to display.
   * @param data - Data to display.
   */
  error(message: any, data?: any): void {
    this._createLog('error', this._buildLogMessage('error', message), data);
  }

  /**
   * Create a debug level log.
   * @param message - Message to display.
   * @param data - Data to display.
   */
  debug(message: any, data?: any): void {
    this._createLog('debug', this._buildLogMessage('debug', message), data);
  }

  /**
   * Build formatted log message with given level and message.
   * @param level - Log level.
   * @param message - Message to display.
   */
  private _buildLogMessage(level: string, message: any): string {
    return `${new Date().toLocaleString()} - [${level.toUpperCase()}] [${this._context} - ${this.id}] ${message}`;
  }

  /**
   * Create log to console.
   * @param level - Log level. It's equal to logging method name of console object.
   * @param message - Message to display.
   * @param data - Data to display.
   */
  private _createLog(level: keyof typeof SplLogLevel, message: string, data: any): void {
    if (this.isPlatformBrowser) {
      const loggerLevel = localStorage.getItem(SPL_LOG_LEVEL_KEY) as keyof typeof SplLogLevel | null;

      if (loggerLevel ? SplLogLevel[loggerLevel] < SplLogLevel[level] : true) {
        if (data !== undefined) {
          console[level](`${message}:`, data);
        } else {
          console[level](message);
        }
      }
    }
  }
}

/**
 * Set the log level to display on the console.
 * Only logs with a level equal to or higher than the set level are displayed.
 * Since the log level is saved in LocalStorage, it only works when the platform is a browser.
 * @param level - A log level to set.
 */
export function setSplLogLevel(level: keyof typeof SplLogLevel): void {
  const platformId = inject(PLATFORM_ID);

  if (isPlatformBrowser(platformId)) {
    localStorage.setItem(SPL_LOG_LEVEL_KEY, level);
  }
}
