import React from 'react';
import fbLogo from '../assets/icon-facebook.svg';
import igLogo from '../assets/icon-instagram.svg';
import twLogo from '../assets/icon-twitter.svg';
import ytLogo from '../assets/icon-youtube.svg';

let dashboardData = [
    {
        name: 'facebook',
        logo: fbLogo,
        userHandle: '@nathanf',
        following: {
            metricName: 'Followers',
            amount: 1987,
            change: 12,
        },
        otherMetrics: [
            {
                metricName: 'Page Views',
                amount: 87,
                change: 12,
            },
            {
                metricName: 'Likes',
                amount: 52,
                change: -2,
            },
        ],
    },
    {
        name: 'instagram',
        logo: igLogo,
        userHandle: '@realnathanf',
        following: {
            metricName: 'Followers',
            amount: 11000,
            change: 1099,
        },
        otherMetrics: [
            {
                metricName: 'Likes',
                amount: 5462,
                change: 2257,
            },
            {
                metricName: 'Profile Views',
                amount: 52000,
                change: 1375,
            },
        ],
    },
    {
        name: 'twitter',
        logo: twLogo,
        userHandle: '@nathanf',
        following: {
            metricName: 'Followers',
            amount: 1044,
            change: 99,
        },
        otherMetrics: [
            {
                metricName: 'Retweets',
                amount: 117,
                change: 303,
            },
            {
                metricName: 'Likes',
                amount: 507,
                change: 553,
            },
        ],
    },
    {
        name: 'youtube',
        logo: ytLogo,
        userHandle: 'Nathan F.',
        following: {
            metricName: 'Subscribers',
            amount: 8239,
            change: -144,
        },
        otherMetrics: [
            {
                metricName: 'Likes',
                amount: 107,
                change: -19,
            },
            {
                metricName: 'Total Views',
                amount: 1407,
                change: -12,
            },
        ],
    },
];

let DashboardContext = React.createContext(dashboardData);

export default DashboardContext;
