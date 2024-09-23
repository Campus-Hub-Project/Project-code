import {
    HomeIcon,
    CalendarIcon,
    ArrowRightStartOnRectangleIcon,
    TrashIcon,
    MagnifyingGlassIcon
} from '@heroicons/react/24/outline'

import {
    AcademicCapIcon,
    CircleStackIcon
} from '@heroicons/react/24/outline'

export const userIcons = [
    { id: 1, svg: <HomeIcon className="size-6" />, span: "Início", to: '/dashboard' },
    { id: 2, svg: <MagnifyingGlassIcon className="size-6" />, span: "Buscar", to: '/dashboard' },
    { id: 3, svg: <CalendarIcon className="size-6" />, span: "Minha agenda", to: '/dashboard' },
    { id: 4, svg: <ArrowRightStartOnRectangleIcon className="size-6" />, span: "Sair", to: '/dashboard' },
    { id: 5, svg: <TrashIcon className="size-6" />, span: "Deletar conta", to: '/dashboard' },
]

export const instituitionIcons = [
    { id: 1, svg: <HomeIcon className="size-6" />, span: "Início", to: '/dashboard' },
    { id: 2, svg: <AcademicCapIcon className="size-6" />, span: "Novo evento", to: '/dashboard/new-event' },
    { id: 3, svg: <CalendarIcon className="size-6" />, span: "Meus eventos", to: '/dashboard' },
    { id: 4, svg: <ArrowRightStartOnRectangleIcon className="size-6" />, span: "Sair", to: null },
    { id: 5, svg: <TrashIcon className="size-6" />, span: "Deletar conta", to: null },
]