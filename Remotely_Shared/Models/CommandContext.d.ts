	interface CommandContext {
		ID: string;
		CommandMode: string;
		CommandText: string;
		SenderUserID: string;
		SenderConnectionID: string;
		TargetDeviceIDs: string[];
		PSCoreResults: any[];
		CommandResults: any[];
		TimeStamp: Date;
		OrganizationID: string;
	}
