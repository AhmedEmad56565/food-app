import { firstImages } from '../constants/first-food';
import HeadlineItem from './HeadlineItem';

export default function HeadlineCards() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 py-8'>
      {firstImages.map((meal) => (
        <HeadlineItem key={meal.title} meal={meal} />
      ))}
    </div>
  );
}
