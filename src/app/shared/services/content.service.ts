import { Injectable } from '@angular/core';
import contentData from '../../../../content.json';

@Injectable({ providedIn: 'root' })
export class ContentService {
  private pickRandom<T>(arr: T[], count: number): T[] {
    const shuffled = [...arr].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
  }

  getBulletPoints(section: string): string[] {
    const sec = contentData.find((s) => s.section === section);
    if (!sec) return [];
    const nonFunny = this.pickRandom(
      sec.content.filter((i) => i.type !== 'funny'),
      2,
    ).map((i) => i.text);
    const funny = this.pickRandom(
      sec.content.filter((i) => i.type === 'funny'),
      1,
    ).map((i) => i.text);
    return [...nonFunny, ...funny];
  }
}
