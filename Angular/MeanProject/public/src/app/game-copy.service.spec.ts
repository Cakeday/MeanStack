import { TestBed } from '@angular/core/testing';

import { GameCopyService } from './game-copy.service';

describe('GameCopyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GameCopyService = TestBed.get(GameCopyService);
    expect(service).toBeTruthy();
  });
});
