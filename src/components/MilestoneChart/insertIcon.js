import prompt from './assets/prompt.svg';
import prev from './assets/prev.svg';
import next from './assets/next.svg';

const typeMap = {
    'prompt': prompt,
    'prev': prev,
    'next': next,
};
  
export function insertIcon(type) {
    return typeMap[type] || '';
}
