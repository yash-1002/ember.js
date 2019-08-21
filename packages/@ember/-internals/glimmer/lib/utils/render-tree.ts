import { Owner } from '@ember/-internals/owner';
import { Bounds } from '@glimmer/runtime';

export function captureRenderTree(_owner: Owner): RenderNode[] {
  return [];
}

export interface RenderNode {
  type: 'route' | 'component';
  name: string;
  context: object | null;
  bounds: Bounds;
  children: RenderNode[];
}

export default class RenderTree {

}
