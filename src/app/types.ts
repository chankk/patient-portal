export interface AppointmentProps {
	id: number;
	date: Date;
	doctor: string;
	type: string;
	purpose: string;
	location: string;
	details: string;
};

export interface CardProps {
	content: string;
	heading: string;
	href: string;
}

export interface DoctorProps {
	id: number;
	date: Date;
	purpose: string;
	details: string;
}
export interface HospitalizationProps {
	id: number;
	date: Date;
	diagnosis: string;
	treatment: string;
	doctor: string;
	hospital: string;
	details: string;
}
export interface ImmunizationProps {
	id: number;
	date: Date;
	vaccine: string;
	disease: string;
	details: string;
}

export interface TestResultProps {
	id: number;
	date: Date;
	category: string;
	test: string;
	result: string;
	doctor: string;
	details: string;
}
