
import { Hall, Artist } from './types';

export const HALLS: Hall[] = [
  {
    id: '1',
    name: 'قاعة اللؤلؤة الملكية',
    location: 'التجمع الخامس، القاهرة',
    price: 45000,
    rating: 4.9,
    capacity: 500,
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=800',
    tags: ['فاخرة', 'داخلية'],
    description: 'تجربة ملكية لا تُنسى في قلب القاهرة الجديدة.'
  },
  {
    id: '2',
    name: 'تراس النيل الساحر',
    location: 'الزمالك، القاهرة',
    price: 35000,
    rating: 4.7,
    capacity: 300,
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=800',
    tags: ['خارجية', 'إطلالة نيلية'],
    description: 'احتفل بليلة العمر مع أجمل إطلالة على نيل القاهرة.'
  },
  {
    id: '3',
    name: 'قصر الفيروز',
    location: 'مصر الجديدة، القاهرة',
    price: 60000,
    rating: 5.0,
    capacity: 800,
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800',
    tags: ['قصور', 'أعداد كبيرة'],
    description: 'الفخامة الكلاسيكية تجتمع مع الخدمات العصرية.'
  },
  {
    id: '4',
    name: 'قاعة رويال جاردن',
    location: 'الشيخ زايد، الجيزة',
    price: 40000,
    rating: 4.8,
    capacity: 450,
    image: 'https://images.unsplash.com/photo-1544144433-d50aff500b91?auto=format&fit=crop&q=80&w=800',
    tags: ['حديقة', 'مودرن'],
    description: 'مكان ساحر وسط الخضرة والهدوء.'
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'أحمد ومي',
    hall: 'قاعة اللؤلؤة الملكية',
    comment: 'كانت ليلة من الأحلام! القاعة كانت قمة في الشياكة والخدمة ممتازة جداً. بنشكر فريق جوزني على المساعدة في الاختيار.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=ahmed'
  },
  {
    id: 2,
    name: 'محمود السيد',
    hall: 'تراس النيل الساحر',
    comment: 'المنظر على النيل كان يخطف الأنفاس، والتنظيم كان احترافي جداً. تجربة الحجز من خلال الموقع كانت سهلة وسريعة.',
    rating: 4,
    avatar: 'https://i.pravatar.cc/150?u=mahmoud'
  },
  {
    id: 3,
    name: 'دينا علي',
    hall: 'قصر الفيروز',
    comment: 'فخامة لا توصف، القاعة واسعة جداً ومناسبة للأعداد الكبيرة. الصور طلعت تحفة بسبب الديكورات الراقية.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=dina'
  }
];

export const ARTISTS: Artist[] = [
  {
    id: '1',
    name: 'سارة أحمد',
    specialty: 'ماكياج عرايس',
    rating: 4.9,
    image: 'https://picsum.photos/seed/art1/400/400',
    reviews: 124
  },
  {
    id: '2',
    name: 'ليلى محمود',
    specialty: 'ماكياج سينمائي وخطوبة',
    rating: 4.8,
    image: 'https://picsum.photos/seed/art2/400/400',
    reviews: 89
  }
];
