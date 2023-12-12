import Image from 'next/image';
import { StudySchedule, HonestyPolicy, HeroElement, MainFooter } from '@/devlink';

export default function Page() {
  return (
    <main className="">
      <HeroElement />
      <HonestyPolicy />
      <StudySchedule />
      <MainFooter />
    </main>
  );
}