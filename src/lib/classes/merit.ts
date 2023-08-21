export interface Request {
	LtLocked: boolean;
	OwnedBy: string;
	CreatedBy: string;
	RocketID: string;
	UID: string;
	Problem: string;
	CommitMsg: string;
	Solution: string;
	Commit: string;
	Amount: number;
	RemuneratedAmount: number;
	DividendAmount: number;
	WitnessedAt: number;
	Nth: number;
	Ratifiers: {
		[key: string]: any;
	};
	RatifyPermille: number;
	Blackballers: {
		[key: string]: any;
	};
	BlackballPermille: number;
	Approved: boolean;
	Rejected: boolean;
	MeritsCreated: number;
}

export interface Merit {
	Account: string;
	RocketID: string;
	LeadTimeLockedMerits: number;
	LeadTime: number;
	LastLtChange: number;
	LeadTimeUnlockedMerits: number;
	TotalMerits: number;
	Requests: Request[];
	OpReturnAddresses?: string;
}

export interface MeritInfo {
	[key: string]: Merit;
}
