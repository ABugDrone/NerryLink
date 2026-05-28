import { describe, it, expect } from 'vitest';
import { team } from '@/lib/team';

describe('Team data', () => {
  it('should have at least 2 members', () => {
    expect(team.length).toBeGreaterThanOrEqual(2);
  });

  it('every member should have required fields', () => {
    for (const m of team) {
      expect(typeof m.id).toBe('string');
      expect(m.id.length).toBeGreaterThan(0);
      expect(typeof m.name).toBe('string');
      expect(m.name.length).toBeGreaterThan(0);
      expect(typeof m.role).toBe('string');
      expect(typeof m.photoUrl).toBe('string');
      expect(typeof m.facebookUrl).toBe('string');
      expect(m.facebookUrl).toMatch(/^https?:\/\//);
    }
  });

  it('member IDs should be unique', () => {
    const ids = team.map((m) => m.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
});