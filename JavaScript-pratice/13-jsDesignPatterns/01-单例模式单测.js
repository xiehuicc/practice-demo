const { describe, test, expect } = require('@jest/globals')
const Logger = require('./01-单例模式.js')

describe('Logger 类的构造函数', () => {
  test('首次创建实例时，应创建新的实例并赋值给 instance', () => {
    const logger = new Logger();
    expect(logger.logs).toEqual([]);
    expect(Logger.instance).toBe(logger);
  });

  test('再次创建实例时，应返回已存在的 instance', () => {
    const existingLogger = new Logger();
    const newLogger = new Logger();
    expect(newLogger).toBe(existingLogger);
  });
});
