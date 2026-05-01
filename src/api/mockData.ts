import { Season, Photo } from '../types';

export const mockSeasons: Season[] = [
  {
    id: '1',
    title: 'React 마스터리: 기초부터 심화까지',
    description: 'React의 기본 개념을 배우고, Hooks와 상태 관리를 통해 실전적인 애플리케이션을 구축하는 방법을 학습합니다.',
  },
  {
    id: '2',
    title: 'TypeScript 완전 정복',
    description: 'JavaScript에 정적 타입을 더하여 코드의 안정성과 가독성을 높이는 TypeScript의 모든 것을 다룹니다.',
  },
  {
    id: '3',
    title: 'Tailwind CSS 실전 가이드',
    description: '유틸리티 우선 CSS 프레임워크인 Tailwind CSS를 사용하여 빠르고 일관된 디자인 시스템을 구축하는 방법을 배웁니다.',
  },
];

export const mockPhotos: Photo[] = [
  // Season 1 Photos (React)
  {
    id: '101',
    seasonId: '1',
    title: '1강: React 소개 및 환경 설정',
    url: 'https://via.placeholder.com/640x360.png?text=React+Lecture+1',
    description: 'React의 역사와 철학을 이해하고, 개발 환경(Node.js, CRA)을 설정합니다.',
  },
  {
    id: '102',
    seasonId: '1',
    title: '2강: JSX와 컴포넌트의 이해',
    url: 'https://via.placeholder.com/640x360.png?text=React+Lecture+2',
    description: 'JSX 문법의 특징과 함수형/클래스형 컴포넌트의 차이점을 알아봅니다.',
  },
  {
    id: '103',
    seasonId: '1',
    title: '3강: State와 Props',
    url: 'https://via.placeholder.com/640x360.png?text=React+Lecture+3',
    description: '컴포넌트의 상태(State)를 관리하고 부모-자식 컴포넌트 간에 데이터(Props)를 전달하는 방법을 배웁니다.',
  },
  // Season 2 Photos (TypeScript)
  {
    id: '201',
    seasonId: '2',
    title: '1강: TypeScript 시작하기',
    url: 'https://via.placeholder.com/640x360.png?text=TypeScript+Lecture+1',
    description: 'TypeScript를 설치하고 기본 타입을 선언하는 방법을 학습합니다.',
  },
  {
    id: '202',
    seasonId: '2',
    title: '2강: 인터페이스와 제네릭',
    url: 'https://via.placeholder.com/640x360.png?text=TypeScript+Lecture+2',
    description: '객체의 구조를 정의하는 인터페이스와 재사용 가능한 타입 로직을 위한 제네릭을 다룹니다.',
  },
  // Season 3 Photos (Tailwind CSS)
  {
    id: '301',
    seasonId: '3',
    title: '1강: Tailwind CSS 기본 개념',
    url: 'https://via.placeholder.com/640x360.png?text=Tailwind+Lecture+1',
    description: '유틸리티 우선 접근 방식과 Tailwind CSS의 핵심 개념을 알아봅니다.',
  },
];