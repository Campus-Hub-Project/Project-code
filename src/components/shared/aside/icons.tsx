import {
    HomeIcon,
    CalendarIcon,
    ArrowRightStartOnRectangleIcon,
    TrashIcon,
    MagnifyingGlassIcon,
    ArrowLeftCircleIcon
} from '@heroicons/react/24/outline'

import {
    AcademicCapIcon,
    CircleStackIcon
} from '@heroicons/react/24/outline'

export const userIcons = [
    // mostrar os eventos inscrito ou uma mensagem de não ter nenhum.
    { svg: <HomeIcon className="size-6" />, text: "Início", to: '/dashboard' },

    { svg: <MagnifyingGlassIcon className="size-6" />, text: "Buscar", to: '/dashboard' },
    { svg: <CalendarIcon className="size-6" />, text: "Minha agenda", to: '/dashboard' },
]

export const iconsRelatedToInstituition = [
    // mostrar os eventos criados ou uma mensagem de não ter nenhum.
    { svg: <HomeIcon className="size-6" />, text: "Início", to: '/dashboard' },

    // levar ao formulário para criar um novo evento
    { svg: <AcademicCapIcon className="size-6" />, text: "Novo evento", to: '/dashboard' },

    // { id: 3, svg: <CalendarIcon className="size-6" />, span: "Meus eventos", to: '/dashboard/events/my-events' },    
]

export const iconsRelatedToBoth = [
    { svg: <ArrowLeftCircleIcon className='size-6' />, text: 'Sair' },
    { svg: <TrashIcon className='size-6' />, text: 'Deletar conta' }
]