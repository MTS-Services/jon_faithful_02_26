import InfoTabsSection from '../cities/info-tabs-section';

const tabs = [
    {
        id: 'tab1',
        label: 'Schools & Education',
        title: 'Schools & Education',
        intro: 'School quality varies by city and county. Highly rated areas include:',
        items: [
            'Williamson County (Franklin)',
            'Parts of Knoxville & Chattanooga',
            'Kingsport & Johnson City school districts',
            'School ratings',
            'District boundaries',
            'Commute times',
        ],
        footer: 'Education access is a major draw for families relocating to the area.',
        imageUrl: '/assets/images/Knoxville-high-school-tn1-scaled-1-2048x944.jpg',
    },
    {
        id: 'tab2',
        label: 'Healthcare & Employment',
        title: 'Healthcare & Employment',
        intro: 'Tennessee has strong job growth in:',
        items: [
            'Healthcare',
            'Manufacturing',
            'Logistics & distribution',
            'Technology',
            'HCA Healthcare',
            'Amazon',
            'FedEx',
            'Nissan',
            'Oak Ridge National Lab',
        ],
        
        footer: 'Remote workers also benefit from lower living costs.',
        imageUrl: '/assets/images/ther-in-the-creative-office.-Team-building-concept.-Office-life-2048x969.jpeg',
    },
    {
        id: 'tab3',
        label: 'Transportation & Commuting',
        title: 'Transportation & Commuting',
        intro: '',
        items: [
            'Most areas require a personal vehicle',
            'Most areas require a personal vehicle',
            'Shorter commutes than many metro areas',
            'Minimal toll roads',
        ],
        footer: 'Nashville offers big-city energy with Southern hospitality.',
        imageUrl:
            '/assets/images/Downtown-Vintage-Trolley-in-Memphis-Tennessee-2048x1367.jpeg',
    },
    {
        id: 'tab4',
        label: 'Weather & Climate',
        title: 'Weather & Climate',
        intro: 'Tennessee experiences:',
        items: [
            'Mild winters (light snow in most areas)',
            'Hot, humid summers',
            'Beautiful spring and fall seasons',
        ],
        footer: 'Severe weather can occur, but most residents find it manageable.',
        imageUrl: '/assets/images/Hay-bales-in-pasture-on-horse-farm-in-shadow-of-the-Blue-Ridge-Mountains-2048x1000.jpeg',
        cta: {
            label: 'Homes for Sale',
            href: '/homes-for-sale',
            icon: '',
        },
    },
];
export default function Tabs() {
    return (
        <div>
            <InfoTabsSection tabs={tabs} />
        </div>
    );
}
