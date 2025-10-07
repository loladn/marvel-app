import { describe, expect, jest, test } from '@jest/globals'
import { getCharacters, getCharacterById } from './characters-api';
import characters from '../data/characters.json';

// Mock the characters data for testing purposes
jest.mock('../data/characters.json', () => [
    { id: 1, name: 'Character One' },
    { id: 2, name: 'Character Two' },
]);

// Test suite for characters-api.js
describe('characters-api', () => {

    // Test for getCharacters function
    describe('getCharacters', () => {
        test('should return the list of characters', () => {
            const result = getCharacters();
            expect(result).toEqual(characters);
        });
    });

    // Test for getCharacterById function
    describe('getCharacterById', () => {
        
        // Happy path: normal case
        test('should return the correct character when a valid ID is provided', () => {
            const result = getCharacterById(1);
            expect(result).toEqual({ id: 1, name: 'Character One' });
        });

        // Error cases: invalid IDs
        test('should throw an error when character is not found', () => {
            expect(() => {
                getCharacterById(999);
            }).toThrow('Character with id 999 not found');
        });

        test('should throw an error when ID is null', () => {
            expect(() => {
                getCharacterById(null);
            }).toThrow('Character with id null not found');
        });

        test('should throw an error when ID is undefined', () => {
            expect(() => {
                getCharacterById(undefined);
            }).toThrow('Character with id undefined not found');
        });
    });
});