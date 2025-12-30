// 网站配置数据
const siteConfig = {
	name: "智泓创芯",
	slogan: "智能工业质检解决方案",
	contact: {
		address: "山东省淄博市张店区和平街道办事处南西六路21号淄博市创业孵化中心A座13层",
		phone: "138-0000-0000",
		email: "contact@zhihong.com"
	}
};

// 解决方案数据
const solutions = [
	{
		id: "industrial",
		title: "工业制造",
		image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format&fit=crop",
		desc: "针对3C电子、家电、五金等外观、尺寸、装配缺陷的自动化检测。",
		features: [
			{
				title: "智能制造与决策优化",
				desc: "双向传导机制打通工艺端与质检端..."
			},
			{
				title: "智能质检核心方案",
				desc: "复杂纹理与缺陷识别..."
			}
		],
		advantages: ["高精度在线检测", "AI融合检测算法", "工艺数据驱动", "柔性部署方案"]
	},
	{
		id: "auto",
		title: "汽车制造",
		image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&auto=format&fit=crop",
		desc: "针对汽车制造中外观、漆面、涂胶等关键环节的自动化检测需求。"
	},
	{
		id: "food",
		title: "食品包装",
		image: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?w-800&auto=format&fit=crop",
		desc: "适用千高速产线，解决食品包装的破损、漏油等缺陷在线检测难题。"
	}
];

// 案例数据
const cases = [
	{
		id: "pcb",
		title: "电子板缺陷检测",
		category: "工业制造",
		image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop",
		desc: "针对高精度PCB板，解决多层、微缺等微小缺陷在线检测难题。通过3D线阵视觉与深度学习算法融合，实现95%以上检出率。",
		details: {
			intro: "东莞某电子有限公司是一家专注于电子印刷板制造的高新技术企业...",
			challenges: [
				{ title: "质检效率低下", desc: "原有依靠人工抽检..." },
				{ title: "精度难以保障", desc: "多层、微缺等微小缺陷..." }
			],
			results: [
				{ title: "效率提升", desc: "检测周期缩短至20秒/板..." },
				{ title: "质量优化", desc: "缺陷检出率稳定在99.7%..." }
			]
		}
	},
	{
		id: "car-vision",
		title: "汽车视觉检测系统",
		category: "汽车制造",
		image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&auto=format&fit=crop",
		desc: "针对整车制造中外观、漆面、涂胶等关键环节的自动化检测需求。"
	}
];

// 优势数据
const advantages = [
	{
		title: "领先的工业AI视觉算法",
		desc: "基于自研深度学习框架，融合传统视觉与前沿模型，针对微小缺陷、复杂背景等场景优化，在电子、汽车、包装等行业实现超高精度、高鲁棒性检测。"
	},
	{
		title: "全栈自研的软硬件系统",
		desc: "提供从光学成像、采集控制、边缘计算到算法平台的全栈自主方案，确保在高洁、震动、反光等严苛环境下稳定运行，实现软件与硬件的深度协同。"
	}
];