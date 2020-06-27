import {
    animation, trigger, animateChild, group,
    transition, animate, style, query, state
} from '@angular/animations';

export const fundido =
    trigger('fadeIn', [
        state('*', style({
            opacity: 1,
        })),
        transition(':enter', [
            style({
                opacity: 0,
                // transform: 'translateY(-30%), rotate(100deg)'
            }),
            animate('500ms linear')
        ]),
        transition(':leave', [
            style({
                opacity: 0,
                // transform: 'translateY(0%), rotate(0deg)'
            }),
            animate('300ms linear')
        ])
    ])