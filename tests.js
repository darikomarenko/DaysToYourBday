import chai from 'chai'
import { calculateDifference } from './index.js'

const assert = chai.assert;
const should = chai.should();
chai.config.truncateThreshold=0;

describe("Basic tests",() =>{
  it("today is bday", () => {
    // Arrange
    const today = new Date();

    // Act
    const difference = calculateDifference(today, today);

    // Assert
    assert.strictEqual(difference, 0);
  });

  it("bday is from past", () => {
    // Arrange
    const currDay = new Date('11-14-2023');
    const oldYearDate = new Date('01-02-1988');
    const thisYearPastDate = new Date('05-09-2023');

    // Act
    const differenceWithOldYear = calculateDifference(oldYearDate, currDay);
    const differenceWithThisYear = calculateDifference(thisYearPastDate, currDay);

    // Assert
    assert.strictEqual(differenceWithOldYear, 49);
    assert.strictEqual(differenceWithThisYear, 177);
  });

  it("bday is in future", () => {
    // Arrange
    const currDay = new Date('11-14-2023');
    const oldYearDate = new Date('12-23-1988');
    const thisYearDate = new Date('11-24-2023');

    // Act
    const differenceWithOldYear = calculateDifference(oldYearDate, currDay);
    const differenceWithThisYear = calculateDifference(thisYearDate, currDay);

    // Assert
    assert.strictEqual(differenceWithOldYear, 39);
    assert.strictEqual(differenceWithThisYear, 10);
  });
});
