import { createLogger } from "../logger";

it('Should returne stored logs', () => {
  const result = createLogger().getLogs()
  expect(result).toEqual([])
})
it('Should add message and return arrow with log message', () => {
  const logger = createLogger('some name')
  logger.log('some message')
  const result = logger.getLogs();
  expect(result).toEqual(['log - some name - some message'])
})
it('Should add error and return arrow with error message', () => {
  const logger = createLogger('some name')
  logger.error('error')
  const result = logger.getLogs();
  expect(result).toEqual(['error - some name - error'])
})