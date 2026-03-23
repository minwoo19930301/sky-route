const DAY_LABELS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const DESTINATIONS = {
    paris: {
        id: 'paris',
        city: 'Paris',
        country: 'France',
        summary: '예술, 겨울 산책, 디즈니, 박물관까지 한 번에 담은 파리 중심 일정입니다.',
        footer: 'Paris always works for a dramatic week.',
        heroImage: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop',
        accent: '#FFD700',
        accentRgb: '255, 215, 0',
        ink: '#1A237E',
        inkRgb: '26, 35, 126',
        overlayTop: 'rgba(26, 35, 126, 0.62)',
        overlayBottom: 'rgba(9, 14, 48, 0.94)',
        timeZone: 'Europe/Paris',
        weather: { latitude: 48.8566, longitude: 2.3522 },
        currency: { code: 'EUR', symbol: '€', locale: 'fr-FR' },
        startOffsetDays: 5,
        phraseLabel: 'French phrase',
        phrases: [
            { text: 'Bonjour', pron: '[봉쥬르]', meaning: '안녕하세요' },
            { text: 'Merci beaucoup', pron: '[메흑씨 보꾸]', meaning: '정말 감사합니다' },
            { text: 'Excusez-moi', pron: '[엑스큐제 무아]', meaning: '실례합니다' },
            { text: 'Un café, s’il vous plaît', pron: '[앙 카페 실 부 플레]', meaning: '커피 한 잔 주세요' },
            { text: 'Où est le métro ?', pron: '[우 에 르 메트호]', meaning: '지하철역이 어디예요?' },
            { text: 'L’addition, s’il vous plaît', pron: '[라디시옹 실 부 플레]', meaning: '계산서 주세요' }
        ],
        itineraryTemplate: [
            {
                title: '도착 & 강변 적응',
                activities: [
                    { time: '14:00', title: '샹젤리제 산책', type: 'footprints', location: 'Champs-Élysées' },
                    { time: '16:30', title: '개선문 전망', type: 'camera', location: 'Arc de Triomphe' },
                    { time: '19:00', title: '센강 야경 크루즈', type: 'ship', location: 'Seine River Cruise Paris' }
                ]
            },
            {
                title: '파리 랜드마크 데이',
                activities: [
                    { time: '09:30', title: '에펠탑', type: 'tower-control', location: 'Eiffel Tower' },
                    { time: '13:00', title: '오페라 가르니에', type: 'music', location: 'Palais Garnier' },
                    { time: '17:30', title: '노트르담 주변 산책', type: 'church', location: 'Cathédrale Notre-Dame de Paris' }
                ]
            },
            {
                title: '뮤지엄 & 마켓',
                activities: [
                    { time: '10:00', title: '루브르 박물관', type: 'image', location: 'Louvre Museum' },
                    { time: '14:30', title: '튈르리 가든', type: 'trees', location: 'Jardin des Tuileries' },
                    { time: '18:30', title: '크리스마스 마켓 체크', type: 'sparkles', location: 'Tuileries Christmas Market Paris' }
                ]
            },
            {
                title: '예술과 디저트',
                activities: [
                    { time: '10:30', title: '오르세 미술관', type: 'palette', location: "Musée d'Orsay" },
                    { time: '14:00', title: '몽마르트 카페', type: 'coffee', location: 'Montmartre' },
                    { time: '18:00', title: '사크레쾨르 야경', type: 'moon-star', location: 'Sacré-Cœur' }
                ]
            },
            {
                title: '쇼핑 & 출발',
                activities: [
                    { time: '10:00', title: '몽쥬약국 쇼핑', type: 'shopping-bag', location: 'Pharmacie Monge' },
                    { time: '13:00', title: '기념품 마지막 체크', type: 'gift', location: 'Le Marais' },
                    { time: '16:00', title: '공항 이동', type: 'plane', location: 'Charles de Gaulle Airport' }
                ]
            }
        ]
    },
    london: {
        id: 'london',
        city: 'London',
        country: 'United Kingdom',
        summary: '런던 핵심 랜드마크와 마켓, 박물관, 웨스트엔드를 빠르게 묶은 일정입니다.',
        footer: 'London feels best when the day stretches from market to theatre.',
        heroImage: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070&auto=format&fit=crop',
        accent: '#FBBF24',
        accentRgb: '251, 191, 36',
        ink: '#0F172A',
        inkRgb: '15, 23, 42',
        overlayTop: 'rgba(15, 23, 42, 0.62)',
        overlayBottom: 'rgba(15, 23, 42, 0.94)',
        timeZone: 'Europe/London',
        weather: { latitude: 51.5072, longitude: -0.1276 },
        currency: { code: 'GBP', symbol: '£', locale: 'en-GB' },
        startOffsetDays: 6,
        phraseLabel: 'British phrase',
        phrases: [
            { text: 'Cheers', pron: '[치얼즈]', meaning: '고마워요 / 좋아요' },
            { text: 'Mind the gap', pron: '[마인드 더 갭]', meaning: '발밑 조심하세요' },
            { text: 'Could I get this to go?', pron: '[쿧 아이 겟 디스 투 고]', meaning: '이거 포장 가능할까요?' },
            { text: 'Queue this side', pron: '[큐 디스 사이드]', meaning: '줄은 이쪽입니다' },
            { text: 'Lovely', pron: '[러블리]', meaning: '아주 좋네요' },
            { text: 'Where is the Tube?', pron: '[웨어 이즈 더 튜브]', meaning: '지하철 어디예요?' }
        ],
        itineraryTemplate: [
            {
                title: '웨스트민스터 워밍업',
                activities: [
                    { time: '10:00', title: '빅벤 & 국회의사당', type: 'landmark', location: 'Big Ben' },
                    { time: '13:00', title: '웨스트민스터 사원', type: 'church', location: 'Westminster Abbey' },
                    { time: '18:30', title: '런던아이 야경', type: 'ferris-wheel', location: 'London Eye' }
                ]
            },
            {
                title: '왕실 & 공원',
                activities: [
                    { time: '10:30', title: '버킹엄 궁전', type: 'crown', location: 'Buckingham Palace' },
                    { time: '13:30', title: '세인트 제임스 파크', type: 'trees', location: "St James's Park" },
                    { time: '17:30', title: '피카딜리 서커스', type: 'lightbulb', location: 'Piccadilly Circus' }
                ]
            },
            {
                title: '뮤지엄 데이',
                activities: [
                    { time: '10:00', title: '대영박물관', type: 'building-2', location: 'The British Museum' },
                    { time: '14:30', title: '코벤트 가든', type: 'shopping-bag', location: 'Covent Garden' },
                    { time: '19:00', title: '웨스트엔드 공연', type: 'ticket', location: 'West End Theatre District' }
                ]
            },
            {
                title: '시티뷰 & 브리지',
                activities: [
                    { time: '10:30', title: '타워 브리지', type: 'bridge', location: 'Tower Bridge' },
                    { time: '13:00', title: '타워 오브 런던', type: 'castle', location: 'Tower of London' },
                    { time: '18:00', title: '스카이가든', type: 'binoculars', location: 'Sky Garden' }
                ]
            },
            {
                title: '노팅힐 & 귀국',
                activities: [
                    { time: '10:00', title: '포토벨로 로드', type: 'store', location: 'Portobello Road Market' },
                    { time: '13:30', title: '노팅힐 산책', type: 'map', location: 'Notting Hill' },
                    { time: '17:00', title: '히드로 이동', type: 'plane', location: 'Heathrow Airport' }
                ]
            }
        ]
    },
    'new-york': {
        id: 'new-york',
        city: 'New York',
        country: 'United States',
        summary: '뉴욕 대표 스폿 위주로 밀도 있게 짠 도심형 일정입니다.',
        footer: 'New York rewards dense days and late walks.',
        heroImage: 'https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?q=80&w=2070&auto=format&fit=crop',
        accent: '#60A5FA',
        accentRgb: '96, 165, 250',
        ink: '#0B1120',
        inkRgb: '11, 17, 32',
        overlayTop: 'rgba(11, 17, 32, 0.58)',
        overlayBottom: 'rgba(11, 17, 32, 0.94)',
        timeZone: 'America/New_York',
        weather: { latitude: 40.7128, longitude: -74.0060 },
        currency: { code: 'USD', symbol: '$', locale: 'en-US' },
        startOffsetDays: 7,
        phraseLabel: 'NYC phrase',
        phrases: [
            { text: 'How’s it going?', pron: '[하우즈 잇 고잉]', meaning: '어때요?' },
            { text: 'Can I get this to go?', pron: '[캔 아이 겟 디스 투 고]', meaning: '포장 부탁해요' },
            { text: 'Downtown or Uptown?', pron: '[다운타운 오어 업타운]', meaning: '남행인가 북행인가요?' },
            { text: 'I’m heading to Midtown', pron: '[아임 헤딩 투 미드타운]', meaning: '미드타운 가는 중이에요' },
            { text: 'Subway entrance?', pron: '[서브웨이 엔트런스]', meaning: '지하철 입구 어디예요?' },
            { text: 'Check, please', pron: '[첵 플리즈]', meaning: '계산서 주세요' }
        ],
        itineraryTemplate: [
            {
                title: '미드타운 집중',
                activities: [
                    { time: '10:00', title: '타임스퀘어', type: 'sparkles', location: 'Times Square' },
                    { time: '13:00', title: '브라이언트 파크 & 도서관', type: 'library', location: 'Bryant Park' },
                    { time: '18:30', title: '탑 오브 더 록', type: 'building', location: 'Top of the Rock' }
                ]
            },
            {
                title: '센트럴파크 & 뮤지엄',
                activities: [
                    { time: '10:30', title: '센트럴파크 산책', type: 'trees', location: 'Central Park' },
                    { time: '13:30', title: '메트로폴리탄 미술관', type: 'palette', location: 'The Metropolitan Museum of Art' },
                    { time: '19:00', title: '5번가 야경', type: 'shopping-bag', location: 'Fifth Avenue' }
                ]
            },
            {
                title: '다운타운 데이',
                activities: [
                    { time: '09:30', title: '자유의 여신상 페리', type: 'ship', location: 'Battery Park' },
                    { time: '13:30', title: '월스트리트', type: 'landmark', location: 'Wall Street' },
                    { time: '17:30', title: '브루클린 브리지', type: 'bridge', location: 'Brooklyn Bridge' }
                ]
            },
            {
                title: '소호 & 첼시',
                activities: [
                    { time: '10:30', title: '소호 카페 투어', type: 'coffee', location: 'SoHo' },
                    { time: '14:00', title: '하이라인', type: 'footprints', location: 'The High Line' },
                    { time: '18:30', title: '첼시마켓', type: 'utensils-crossed', location: 'Chelsea Market' }
                ]
            },
            {
                title: '마지막 쇼핑 & 이동',
                activities: [
                    { time: '10:00', title: '그랜드 센트럴', type: 'train-front', location: 'Grand Central Terminal' },
                    { time: '13:00', title: '기념품 쇼핑', type: 'gift', location: 'Macy’s Herald Square' },
                    { time: '16:30', title: 'JFK 이동', type: 'plane', location: 'John F. Kennedy International Airport' }
                ]
            }
        ]
    },
    'los-angeles': {
        id: 'los-angeles',
        city: 'Los Angeles',
        country: 'United States',
        summary: '미국 서부 감성으로 영화, 비치, 전망 포인트를 담은 느슨한 일정입니다.',
        footer: 'Los Angeles works when you leave room for light and distance.',
        heroImage: 'https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?q=80&w=2070&auto=format&fit=crop',
        accent: '#F97316',
        accentRgb: '249, 115, 22',
        ink: '#431407',
        inkRgb: '67, 20, 7',
        overlayTop: 'rgba(67, 20, 7, 0.42)',
        overlayBottom: 'rgba(24, 24, 27, 0.9)',
        timeZone: 'America/Los_Angeles',
        weather: { latitude: 34.0522, longitude: -118.2437 },
        currency: { code: 'USD', symbol: '$', locale: 'en-US' },
        startOffsetDays: 9,
        phraseLabel: 'LA phrase',
        phrases: [
            { text: 'No worries', pron: '[노 워리즈]', meaning: '괜찮아요' },
            { text: 'Let’s grab tacos', pron: '[렛츠 그랩 타코스]', meaning: '타코 먹으러 가자' },
            { text: 'Traffic is wild today', pron: '[트래픽 이즈 와일드 투데이]', meaning: '오늘 차가 엄청 막히네요' },
            { text: 'See you on the Westside', pron: '[씨 유 온 더 웨스트사이드]', meaning: '웨스트사이드에서 봐요' },
            { text: 'Sunset’s the best time', pron: '[선셋츠 더 베스트 타임]', meaning: '해질 때가 제일 좋아요' },
            { text: 'Takeout, please', pron: '[테이크아웃 플리즈]', meaning: '포장해주세요' }
        ],
        itineraryTemplate: [
            {
                title: '할리우드 워밍업',
                activities: [
                    { time: '10:00', title: '할리우드 워크 오브 페임', type: 'star', location: 'Hollywood Walk of Fame' },
                    { time: '13:30', title: '그리피스 천문대', type: 'telescope', location: 'Griffith Observatory' },
                    { time: '18:30', title: '선셋 스트립', type: 'music-4', location: 'Sunset Strip' }
                ]
            },
            {
                title: '비버리힐스 & 쇼핑',
                activities: [
                    { time: '10:30', title: '로데오 드라이브', type: 'shopping-bag', location: 'Rodeo Drive' },
                    { time: '13:00', title: '더 그로브', type: 'store', location: 'The Grove' },
                    { time: '18:00', title: '파머스 마켓 저녁', type: 'utensils-crossed', location: 'Original Farmers Market' }
                ]
            },
            {
                title: '산타모니카 데이',
                activities: [
                    { time: '10:00', title: '산타모니카 피어', type: 'ferris-wheel', location: 'Santa Monica Pier' },
                    { time: '14:00', title: '베니스 비치', type: 'trees', location: 'Venice Beach' },
                    { time: '18:30', title: '오션프론트 선셋', type: 'sun', location: 'Santa Monica State Beach' }
                ]
            },
            {
                title: '아트 & 다운타운',
                activities: [
                    { time: '10:30', title: '더 브로드', type: 'image', location: 'The Broad' },
                    { time: '13:30', title: '그랜드 센트럴 마켓', type: 'sandwich', location: 'Grand Central Market' },
                    { time: '17:30', title: '월트 디즈니 콘서트홀', type: 'music', location: 'Walt Disney Concert Hall' }
                ]
            },
            {
                title: '브런치 & 공항',
                activities: [
                    { time: '10:00', title: '멜로즈 브런치', type: 'coffee', location: 'Melrose Avenue' },
                    { time: '13:00', title: '기념품 쇼핑', type: 'gift', location: 'Abbot Kinney Boulevard' },
                    { time: '16:00', title: 'LAX 이동', type: 'plane', location: 'Los Angeles International Airport' }
                ]
            }
        ]
    },
    tokyo: {
        id: 'tokyo',
        city: 'Tokyo',
        country: 'Japan',
        summary: '도쿄 핵심 구역을 빠르게 도는 도시형 일정으로, 쇼핑과 전망 포인트 균형을 맞췄습니다.',
        footer: 'Tokyo is best when precision meets neon.',
        heroImage: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2071&auto=format&fit=crop',
        accent: '#F472B6',
        accentRgb: '244, 114, 182',
        ink: '#3B0764',
        inkRgb: '59, 7, 100',
        overlayTop: 'rgba(59, 7, 100, 0.45)',
        overlayBottom: 'rgba(17, 24, 39, 0.92)',
        timeZone: 'Asia/Tokyo',
        weather: { latitude: 35.6762, longitude: 139.6503 },
        currency: { code: 'JPY', symbol: '¥', locale: 'ja-JP' },
        startOffsetDays: 8,
        phraseLabel: 'Japanese phrase',
        phrases: [
            { text: 'Sumimasen', pron: '[스미마셍]', meaning: '실례합니다 / 죄송합니다' },
            { text: 'Arigatou gozaimasu', pron: '[아리가토 고자이마스]', meaning: '감사합니다' },
            { text: 'Kore onegaishimasu', pron: '[코레 오네가이시마스]', meaning: '이걸로 부탁합니다' },
            { text: 'Eki wa doko desu ka?', pron: '[에키와 도코 데스카]', meaning: '역이 어디인가요?' },
            { text: 'Okaikei onegaishimasu', pron: '[오카이케이 오네가이시마스]', meaning: '계산 부탁합니다' },
            { text: 'Daijoubu desu', pron: '[다이죠부 데스]', meaning: '괜찮습니다' }
        ],
        itineraryTemplate: [
            {
                title: '시부야 & 하라주쿠',
                activities: [
                    { time: '10:00', title: '시부야 스크램블', type: 'crosshair', location: 'Shibuya Scramble Crossing' },
                    { time: '13:00', title: '메이지 신궁', type: 'landmark', location: 'Meiji Jingu' },
                    { time: '18:30', title: '시부야 스카이', type: 'building', location: 'Shibuya Sky' }
                ]
            },
            {
                title: '아사쿠사 & 스미다',
                activities: [
                    { time: '10:30', title: '센소지', type: 'landmark', location: 'Senso-ji' },
                    { time: '13:30', title: '나카미세 거리', type: 'shopping-bag', location: 'Nakamise-dori Street' },
                    { time: '18:00', title: '도쿄 스카이트리', type: 'tower-control', location: 'Tokyo Skytree' }
                ]
            },
            {
                title: '긴자 & 도쿄역',
                activities: [
                    { time: '10:30', title: '긴자 카페', type: 'coffee', location: 'Ginza' },
                    { time: '14:00', title: '도쿄역 캐릭터 스트리트', type: 'gift', location: 'Tokyo Character Street' },
                    { time: '19:00', title: '마루노우치 야경', type: 'moon-star', location: 'Marunouchi' }
                ]
            },
            {
                title: '우에노 & 아키하바라',
                activities: [
                    { time: '10:00', title: '우에노 공원', type: 'trees', location: 'Ueno Park' },
                    { time: '13:30', title: '도쿄 국립박물관', type: 'building-2', location: 'Tokyo National Museum' },
                    { time: '18:00', title: '아키하바라', type: 'cpu', location: 'Akihabara' }
                ]
            },
            {
                title: '마지막 쇼핑 & 귀국',
                activities: [
                    { time: '10:00', title: '돈키호테 쇼핑', type: 'shopping-cart', location: 'Don Quijote Shibuya' },
                    { time: '13:00', title: '공항 이동 준비', type: 'luggage', location: 'Tokyo Station' },
                    { time: '16:30', title: '하네다 이동', type: 'plane', location: 'Haneda Airport' }
                ]
            }
        ]
    },
    rome: {
        id: 'rome',
        city: 'Rome',
        country: 'Italy',
        summary: '로마 유적과 광장, 바티칸, 젤라토 코스를 담은 클래식 일정입니다.',
        footer: 'Rome feels strongest when history and food stay in the same loop.',
        heroImage: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=2070&auto=format&fit=crop',
        accent: '#FACC15',
        accentRgb: '250, 204, 21',
        ink: '#3F1D0A',
        inkRgb: '63, 29, 10',
        overlayTop: 'rgba(63, 29, 10, 0.45)',
        overlayBottom: 'rgba(23, 23, 23, 0.92)',
        timeZone: 'Europe/Rome',
        weather: { latitude: 41.9028, longitude: 12.4964 },
        currency: { code: 'EUR', symbol: '€', locale: 'it-IT' },
        startOffsetDays: 10,
        phraseLabel: 'Italian phrase',
        phrases: [
            { text: 'Ciao', pron: '[차오]', meaning: '안녕하세요 / 안녕' },
            { text: 'Grazie', pron: '[그라치에]', meaning: '감사합니다' },
            { text: 'Un caffè, per favore', pron: '[운 카페 페르 파보레]', meaning: '커피 한 잔 주세요' },
            { text: 'Dov’è la stazione?', pron: '[도베 라 스타치오네]', meaning: '역이 어디인가요?' },
            { text: 'Il conto, per favore', pron: '[일 콘토 페르 파보레]', meaning: '계산서 주세요' },
            { text: 'Molto buono', pron: '[몰토 부오노]', meaning: '정말 맛있어요' }
        ],
        itineraryTemplate: [
            {
                title: '고대 로마 입문',
                activities: [
                    { time: '10:00', title: '콜로세움', type: 'landmark', location: 'Colosseum' },
                    { time: '13:30', title: '포로 로마노', type: 'landmark', location: 'Roman Forum' },
                    { time: '18:30', title: '트레비 분수', type: 'droplets', location: 'Trevi Fountain' }
                ]
            },
            {
                title: '광장과 판테온',
                activities: [
                    { time: '10:30', title: '판테온', type: 'building', location: 'Pantheon' },
                    { time: '13:00', title: '나보나 광장', type: 'map-pin', location: 'Piazza Navona' },
                    { time: '18:00', title: '젤라토 타임', type: 'ice-cream-cone', location: 'Giolitti' }
                ]
            },
            {
                title: '바티칸 데이',
                activities: [
                    { time: '09:30', title: '바티칸 박물관', type: 'image', location: 'Vatican Museums' },
                    { time: '13:30', title: '성 베드로 대성당', type: 'church', location: "St. Peter's Basilica" },
                    { time: '18:30', title: '티베르 강변 산책', type: 'footprints', location: 'Tiber River' }
                ]
            },
            {
                title: '트라스테베레 & 미식',
                activities: [
                    { time: '10:30', title: '트라스테베레 산책', type: 'map', location: 'Trastevere' },
                    { time: '14:00', title: '로컬 파스타 런치', type: 'utensils-crossed', location: 'Trastevere Rome' },
                    { time: '19:00', title: '캄포 데 피오리', type: 'store', location: "Campo de' Fiori" }
                ]
            },
            {
                title: '마지막 스폿 & 공항',
                activities: [
                    { time: '10:00', title: '스페인 계단', type: 'landmark', location: 'Spanish Steps' },
                    { time: '13:00', title: '가죽 소품 쇼핑', type: 'shopping-bag', location: 'Via del Corso' },
                    { time: '16:30', title: '피우미치노 이동', type: 'plane', location: 'Leonardo da Vinci International Airport' }
                ]
            }
        ]
    }
};

let currentDestinationId = 'paris';
let currentWeatherData = null;
let currentItinerary = [];
let userHasScrolled = window.scrollY > 0;

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.12,
    rootMargin: '0px 0px -50px 0px'
});

const dom = {
    heroImage: document.getElementById('hero-image'),
    phraseLabel: document.getElementById('phrase-label'),
    localPhrase: document.getElementById('local-phrase'),
    localPron: document.getElementById('local-pron'),
    localMeaning: document.getElementById('local-meaning'),
    phraseRefreshBtn: document.getElementById('phrase-refresh-btn'),
    destinationClockLabel: document.getElementById('destination-clock-label'),
    timeSeoul: document.getElementById('time-seoul'),
    dateSeoul: document.getElementById('date-seoul'),
    timeDestination: document.getElementById('time-destination'),
    dateDestination: document.getElementById('date-destination'),
    currencySymbolBadge: document.getElementById('currency-symbol-badge'),
    baseCurrencyLabel: document.getElementById('base-currency-label'),
    rateToKrw: document.getElementById('rate-to-krw'),
    rateFromKrw: document.getElementById('rate-from-krw'),
    destinationSelector: document.getElementById('destination-selector'),
    destinationCount: document.getElementById('destination-count'),
    tripCountryChip: document.getElementById('trip-country-chip'),
    tripTitle: document.getElementById('trip-title'),
    tripSummary: document.getElementById('trip-summary'),
    tripLength: document.getElementById('trip-length'),
    tripWindow: document.getElementById('trip-window'),
    tripWeatherLabel: document.getElementById('trip-weather-label'),
    itineraryContainer: document.getElementById('itinerary-container'),
    headerContainer: document.getElementById('header-container'),
    footerNote: document.getElementById('footer-note')
};

function getCurrentDestination() {
    return DESTINATIONS[currentDestinationId];
}

function getLocalNow(timeZone) {
    return new Date(new Date().toLocaleString('en-US', { timeZone }));
}

function formatYmd(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

function formatMonthDay(date) {
    return `${date.getMonth() + 1}.${String(date.getDate()).padStart(2, '0')}`;
}

function applyTheme(destination) {
    document.documentElement.style.setProperty('--accent', destination.accent);
    document.documentElement.style.setProperty('--accent-rgb', destination.accentRgb);
    document.documentElement.style.setProperty('--ink', destination.ink);
    document.documentElement.style.setProperty('--ink-rgb', destination.inkRgb);
    document.documentElement.style.setProperty('--overlay-top', destination.overlayTop);
    document.documentElement.style.setProperty('--overlay-bottom', destination.overlayBottom);
    dom.heroImage.src = destination.heroImage;
    dom.heroImage.alt = `${destination.city}, ${destination.country}`;
    document.title = `${destination.city} Trip Plan`;
    dom.currencySymbolBadge.style.background = `rgba(${destination.inkRgb}, 0.88)`;
}

function buildItinerary(destination) {
    const startDate = getLocalNow(destination.timeZone);
    startDate.setHours(0, 0, 0, 0);
    startDate.setDate(startDate.getDate() + destination.startOffsetDays);

    return destination.itineraryTemplate.map((day, index) => {
        const currentDate = new Date(startDate);
        currentDate.setDate(startDate.getDate() + index);

        return {
            date: formatYmd(currentDate),
            day: DAY_LABELS[currentDate.getDay()],
            title: day.title,
            activities: day.activities
        };
    });
}

function updateHeader(destination) {
    dom.phraseLabel.textContent = destination.phraseLabel;
    dom.destinationClockLabel.textContent = destination.city;
    dom.baseCurrencyLabel.textContent = `1 ${destination.currency.code}`;
    dom.tripCountryChip.textContent = `${destination.country} · ${destination.city}`;
    dom.tripTitle.textContent = `${destination.city}`;
    dom.tripSummary.textContent = destination.summary;
    dom.destinationCount.textContent = `${Object.keys(DESTINATIONS).length} cities`;
    dom.footerNote.textContent = destination.footer;

    currentItinerary = buildItinerary(destination);
    const tripStart = currentItinerary[0];
    const tripEnd = currentItinerary[currentItinerary.length - 1];

    dom.tripLength.textContent = `${currentItinerary.length} days`;
    dom.tripWindow.textContent = `${tripStart.date.slice(5).replace('-', '.')} - ${tripEnd.date.slice(5).replace('-', '.')}`;
    dom.tripWeatherLabel.textContent = 'Forecast';
    dom.currencySymbolBadge.textContent = destination.currency.symbol;
}

function setRandomPhrase() {
    const destination = getCurrentDestination();
    const phrase = destination.phrases[Math.floor(Math.random() * destination.phrases.length)];
    dom.localPhrase.textContent = phrase.text;
    dom.localPron.textContent = phrase.pron;
    dom.localMeaning.textContent = phrase.meaning;
}

function renderDestinationSelector() {
    dom.destinationSelector.innerHTML = '';

    Object.values(DESTINATIONS).forEach((destination) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = `destination-card glass ${destination.id === currentDestinationId ? 'active' : ''}`;
        button.dataset.destination = destination.id;
        button.innerHTML = `
            <div class="text-[10px] uppercase tracking-[0.22em] text-white/45 mb-2">${destination.country}</div>
            <div class="text-sm font-semibold text-white">${destination.city}</div>
        `;

        button.addEventListener('click', () => {
            if (destination.id === currentDestinationId) return;
            userHasScrolled = false;
            setDestination(destination.id);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        dom.destinationSelector.appendChild(button);
    });
}

function updateClocks() {
    const destination = getCurrentDestination();
    const now = new Date();

    dom.timeSeoul.textContent = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Seoul',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    });
    dom.dateSeoul.textContent = now.toLocaleDateString('en-US', {
        timeZone: 'Asia/Seoul',
        month: 'short',
        day: 'numeric',
        weekday: 'short'
    });

    dom.timeDestination.textContent = now.toLocaleTimeString('en-US', {
        timeZone: destination.timeZone,
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    });
    dom.dateDestination.textContent = now.toLocaleDateString('en-US', {
        timeZone: destination.timeZone,
        month: 'short',
        day: 'numeric',
        weekday: 'short'
    });
}

function getWeatherInfo(code) {
    if (code === 0) return { icon: 'sun', color: 'var(--accent)' };
    if (code >= 1 && code <= 3) return { icon: 'cloud-sun', color: '#d1d5db' };
    if (code >= 45 && code <= 48) return { icon: 'cloud-fog', color: '#cbd5e1' };
    if (code >= 51 && code <= 67) return { icon: 'cloud-drizzle', color: '#93c5fd' };
    if (code >= 71 && code <= 77) return { icon: 'snowflake', color: '#f8fafc' };
    if (code >= 80 && code <= 82) return { icon: 'cloud-rain', color: '#60a5fa' };
    if (code >= 95 && code <= 99) return { icon: 'cloud-lightning', color: '#c084fc' };
    return { icon: 'cloud', color: '#cbd5e1' };
}

async function fetchWeather(destination, itinerary) {
    try {
        const firstDate = itinerary[0].date;
        const lastDate = itinerary[itinerary.length - 1].date;
        const params = new URLSearchParams({
            latitude: destination.weather.latitude,
            longitude: destination.weather.longitude,
            daily: 'weather_code,temperature_2m_max,temperature_2m_min',
            hourly: 'temperature_2m,weather_code',
            timezone: destination.timeZone,
            start_date: firstDate,
            end_date: lastDate
        });
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?${params.toString()}`);
        if (!response.ok) throw new Error('weather fetch failed');
        return await response.json();
    } catch (error) {
        console.error('Weather fetch failed:', error);
        return null;
    }
}

async function fetchExchangeRate(destination) {
    try {
        const response = await fetch(`https://open.er-api.com/v6/latest/${destination.currency.code}`);
        if (!response.ok) throw new Error('exchange fetch failed');

        const data = await response.json();
        const rate = data?.rates?.KRW;
        if (!rate) throw new Error('missing KRW rate');

        const formattedToKrw = Math.round(rate).toLocaleString('ko-KR');
        dom.rateToKrw.textContent = `${formattedToKrw} ₩`;

        const reverseValue = 1000 / rate;
        const fractionDigits = destination.currency.code === 'JPY' ? 0 : 2;
        const formattedReverse = new Intl.NumberFormat(destination.currency.locale, {
            minimumFractionDigits: fractionDigits,
            maximumFractionDigits: fractionDigits
        }).format(reverseValue);
        dom.rateFromKrw.textContent = `${formattedReverse} ${destination.currency.symbol}`;
    } catch (error) {
        console.error('Exchange rate fetch failed:', error);
        dom.rateToKrw.textContent = 'Unavailable';
        dom.rateFromKrw.textContent = 'Unavailable';
    }
}

function buildDailyWeatherHtml(weatherData, day) {
    if (!weatherData?.daily?.time) return '';

    const dayIndex = weatherData.daily.time.findIndex((time) => time === day.date);
    if (dayIndex === -1) return '';

    const weatherInfo = getWeatherInfo(weatherData.daily.weather_code[dayIndex]);
    const maxTemp = Math.round(weatherData.daily.temperature_2m_max[dayIndex]);
    const minTemp = Math.round(weatherData.daily.temperature_2m_min[dayIndex]);

    return `
        <div class="flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 backdrop-blur-md">
            <i data-lucide="${weatherInfo.icon}" class="w-4 h-4" style="color:${weatherInfo.color}"></i>
            <span class="text-xs font-bold text-white">${maxTemp}° <span class="text-white/45">/ ${minTemp}°</span></span>
        </div>
    `;
}

function buildHourlyWeatherHtml(weatherData, dayDate, time) {
    if (!weatherData?.hourly?.time) return '';

    const hourLabel = `${dayDate}T${time.split(':')[0]}:00`;
    const hourIndex = weatherData.hourly.time.findIndex((entry) => entry === hourLabel);
    if (hourIndex === -1) return '';

    const weatherInfo = getWeatherInfo(weatherData.hourly.weather_code[hourIndex]);
    const temperature = Math.round(weatherData.hourly.temperature_2m[hourIndex]);

    return `
        <div class="absolute -left-[48px] top-3.5 flex flex-col items-end justify-center w-[36px] z-10">
            <i data-lucide="${weatherInfo.icon}" class="w-5 h-5 mb-0.5" style="color:${weatherInfo.color}"></i>
            <span class="text-[10px] font-bold text-white/90">${temperature}°</span>
        </div>
    `;
}

function renderItinerary(weatherData = null) {
    const destination = getCurrentDestination();
    const now = getLocalNow(destination.timeZone);
    let nextItemFound = false;

    dom.itineraryContainer.innerHTML = '<div class="absolute left-[11px] top-2 bottom-0 w-[2px] bg-white/20"></div>';

    currentItinerary.forEach((day) => {
        let isCurrentDay = false;
        const dayElement = document.createElement('div');
        dayElement.className = 'relative pl-8 reveal';

        const activitiesHtml = day.activities.map((activity) => {
            const activityTime = new Date(`${day.date}T${activity.time}:00`);
            const isNextItem = !nextItemFound && activityTime > now;

            if (isNextItem) {
                nextItemFound = true;
                isCurrentDay = true;
            }

            const memoHtml = activity.memo
                ? `<div class="text-xs text-white/50 mt-1 flex items-center gap-1"><i data-lucide="sticky-note" class="w-3 h-3"></i>${activity.memo}</div>`
                : '';

            return `
                <div ${isNextItem ? 'id="next-schedule"' : ''} class="relative glass p-4 rounded-2xl flex items-center justify-between gap-3 mb-3 hover:bg-white/10 transition-colors group ${isNextItem ? 'next-item' : ''}">
                    ${buildHourlyWeatherHtml(weatherData, day.date, activity.time)}
                    <div class="flex items-center gap-3 flex-1">
                        <div class="p-2 rounded-xl accent-icon shrink-0">
                            <i data-lucide="${activity.type}" class="w-4 h-4"></i>
                        </div>
                        <div>
                            <div class="text-sm font-bold text-white">${activity.time}</div>
                            <div class="text-sm text-white/85">${activity.title}</div>
                            ${memoHtml}
                        </div>
                    </div>
                    <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(activity.location)}"
                        target="_blank"
                        class="map-link p-2 text-white/30 transition-colors shrink-0"
                        title="구글 맵에서 보기">
                        <i data-lucide="map-pin" class="w-5 h-5"></i>
                    </a>
                </div>
            `;
        }).join('');

        const dateColor = isCurrentDay ? 'accent-text drop-shadow-[0_0_10px_rgba(255,255,255,0.28)]' : 'text-white';
        const subColor = isCurrentDay ? 'text-white/90' : 'text-white/60';
        const dotStyle = isCurrentDay
            ? `style="box-shadow:0 0 0 2px rgba(${destination.accentRgb},0.72), 0 0 24px rgba(${destination.accentRgb},0.42);"`
            : '';

        dayElement.innerHTML = `
            <div class="flex items-center gap-3 mb-4">
                <div class="w-6 h-6 rounded-full border-4 border-white/20 shadow-sm z-10 absolute left-0 flex items-center justify-center"
                    style="background:rgba(${destination.inkRgb},0.9);" ${dotStyle}>
                    <div class="w-1.5 h-1.5 rounded-full accent-dot"></div>
                </div>

                <div class="flex items-baseline gap-2">
                    <h3 class="text-xl font-serif font-bold ${dateColor}">${day.day}</h3>
                    <span class="text-sm ${subColor} font-medium">${formatMonthDay(new Date(`${day.date}T00:00:00`))}</span>
                </div>

                <div class="ml-auto">
                    ${buildDailyWeatherHtml(weatherData, day)}
                </div>
            </div>

            <div class="mb-3 pl-0.5 text-xs uppercase tracking-[0.22em] text-white/45">${day.title}</div>
            <div class="space-y-3">
                ${activitiesHtml}
            </div>
        `;

        dom.itineraryContainer.appendChild(dayElement);
    });

    if (weatherData?.daily?.time?.length) {
        dom.tripWeatherLabel.textContent = 'Live forecast';
    } else {
        dom.tripWeatherLabel.textContent = 'Sample route';
    }

    lucide.createIcons();
    dom.itineraryContainer.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

    const nextElement = document.getElementById('next-schedule');
    if (nextElement && !userHasScrolled) {
        setTimeout(() => {
            if (userHasScrolled) return;

            const headerHeight = dom.headerContainer ? dom.headerContainer.offsetHeight : 0;
            const elementRect = nextElement.getBoundingClientRect();
            const absoluteTop = elementRect.top + window.scrollY;
            const targetTop = absoluteTop - headerHeight - 32;

            window.scrollTo({
                top: Math.max(targetTop, 0),
                behavior: 'smooth'
            });
        }, 700);
    }
}

function updateUrl(destinationId) {
    const url = new URL(window.location.href);
    url.searchParams.set('destination', destinationId);
    window.history.replaceState({}, '', url.toString());
}

async function setDestination(destinationId) {
    const destination = DESTINATIONS[destinationId] || DESTINATIONS.paris;
    currentDestinationId = destination.id;
    currentWeatherData = null;

    applyTheme(destination);
    updateHeader(destination);
    renderDestinationSelector();
    setRandomPhrase();
    updateClocks();
    renderItinerary();
    updateUrl(destination.id);

    fetchExchangeRate(destination);
    currentWeatherData = await fetchWeather(destination, currentItinerary);
    renderItinerary(currentWeatherData);
}

window.addEventListener('scroll', () => {
    userHasScrolled = true;
});

dom.phraseRefreshBtn.addEventListener('click', () => {
    setRandomPhrase();
    lucide.createIcons();
});

setInterval(updateClocks, 1000);

const initialDestination = new URL(window.location.href).searchParams.get('destination') || 'paris';
setDestination(initialDestination);
