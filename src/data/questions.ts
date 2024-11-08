export type Question = {
    id: number;
    question?: string;
    text?: string;
    options?: string[];
    input?: string;
    layout?: 'grid' | "grid2" | 'flex' | 'column';
    text2?: string;
    text3?: string;
    button?: string;
    showAlphabeticalChips?: boolean;
};

export const questions: Question[] = [
    {
        id: 1,
        text: "Muchas gracias por tu interés en conocer **customerScoops**, que a través de Formularios Conversacionales Inteligente te ayudamos a aumentar el revenue y rentabilidad de tu negocio.",
        question: "Queremos conocerte, ¿cuál es tu nombre?",
        input: "Nombre",
        layout: 'flex', 
        showAlphabeticalChips: false 
    }, 
    {
        id: 2,
        text:"Genial **Juan**, ahora nos gustaría tener cierta info para diseñar una gran propuesta de valor para ti:",
        question: "¿Cuál es tu cargo/posición dentro de tu empresa?",
        options: ["Board member", "C-level", "Gerente", "Subgerente", "Jefe área", "Lider de área", "Ejecutivo / Analista", "Otro"],
        layout: 'grid', 
        showAlphabeticalChips: false 
    },
    {
        id: 3,
        question: "¿Cuáles son tus principales desafíos para 2024?",
        options: [
            "Aumentar conversión de leads a clientes",
            "Reducir customer churn",
            "Implementar un programa VoC",
            "Reducir costos en gestión de reclamos",
            "Optimizar procesos comerciales",
            "Optimizar procesos operativos",
            "Otro",
        ],
        layout: 'column',
        showAlphabeticalChips: true,
    },
    {
        id: 4,
        question: "¿Cuál CRM están utilizando en tu empresa?",
        options: ["SAP", "Microsoft Dynamics", "Salesforce", "Hubspot", "Zoho", "Netsuite (Oracle)", "Monday", "CRM Propio", "No tengo CRM"],
        layout: 'grid2',  
        showAlphabeticalChips: false,
    },
    {
        id: 5,
        question: "¿A cuál industria pertenece tu empresa?",
        options: ["Tecnología", "Software", "Servicios", "Financiera", "Telecomunicaciones", "Producción /Fabricación", "Logística", "Consumo Masivo", "Mayorista", "Retail", "Otra"],
        layout: 'grid2', 
        showAlphabeticalChips: false,
    },
    {
        id: 6,
        text: "Muchas Gracias!",
        text2: "por querer ser parte <br> de la familia Scoopers",
        text3: "Nos vemos pronto!",
        button: "Finalizar",
        showAlphabeticalChips: false,
    }
];
