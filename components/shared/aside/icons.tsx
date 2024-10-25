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
    // mostrar os eventos inscrito ou uma mensagem de não ter nenhum.
    { id: 1, svg: <HomeIcon className="size-6" />, span: "Início", to: '/dashboard' },

    { id: 2, svg: <MagnifyingGlassIcon className="size-6" />, span: "Buscar", to: '/dashboard' },
    { id: 3, svg: <CalendarIcon className="size-6" />, span: "Minha agenda", to: '/dashboard' },
    
    // opção de realizar signout
    { id: 4, svg: <ArrowRightStartOnRectangleIcon className="size-6" />, span: "Sair", to: null },
    // opção de deletar a conta
    { id: 5, svg: <TrashIcon className="size-6" />, span: "Deletar conta", to: null },
]

export const instituitionIcons = [
    // mostrar os eventos criados ou uma mensagem de não ter nenhum.
    { id: 1, svg: <HomeIcon className="size-6" />, span: "Início", to: '/dashboard' },

    // levar ao formulário para criar um novo evento
    { id: 2, svg: <AcademicCapIcon className="size-6" />, span: "Novo evento", to: '/dashboard/events/new-event' },

    // { id: 3, svg: <CalendarIcon className="size-6" />, span: "Meus eventos", to: '/dashboard/events/my-events' },

    // opção de realizar signout
    { id: 4, svg: <ArrowRightStartOnRectangleIcon className="size-6" />, span: "Sair", to: null },
    // opção de deletar a conta
    { id: 5, svg: <TrashIcon className="size-6" />, span: "Deletar conta", to: null },
]