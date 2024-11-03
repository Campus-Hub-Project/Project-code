import {
    HomeIcon,
    CalendarIcon,
    ArrowRightStartOnRectangleIcon,
    TrashIcon,
    MagnifyingGlassIcon,
    ArrowLeftCircleIcon,
    MapIcon
} from '@heroicons/react/24/outline'

import {
    AcademicCapIcon,
    CircleStackIcon
} from '@heroicons/react/24/outline'

export const iconsRelatedToRegularUser = [
    // mostrar os eventos que o usuário se inscreveu ou uma mensagem de não ter nenhum.
    { svg: <HomeIcon className="size-6" />, text: "Início", to: '/dashboard' },

    // mostrar os eventos da plataforma, de preferência, paginados.
    { svg: <MapIcon className="size-6" />, text: "Encontre eventos", to: '/dashboard/find-events' },
]

export const iconsRelatedToInstituition = [
    // mostrar os eventos que o usuário criou ou uma mensagem de não ter nenhum.
    { svg: <HomeIcon className="size-6" />, text: "Início", to: '/dashboard' },

    // levar ao formulário para criar um novo evento
    { svg: <AcademicCapIcon className="size-6" />, text: "Novo evento", to: '/dashboard/new-event' },    
]

export const iconsRelatedToBoth = [
    { svg: <ArrowLeftCircleIcon className='size-6' />, text: 'Sair' },
    { svg: <TrashIcon className='size-6' />, text: 'Deletar conta' }
]