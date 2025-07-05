export interface SupportEmail {
  supportEmailId: string;
  emailDomain: string;
  supportEmailAddress: string;
  forwardingAddress: string;
  inboundProvider: string;
  outboundMode: string;
  replyToAddress: string;
  displayName: string;
  smtpHost: string;
  smtpPort: number;
  smtpUsername: string;
  smtpPasswordEncrypted: string;
  smtpUseSsl: boolean;
  emailSignature: string;
  emailFooterHtml: string;
  isVerified: boolean;
  createdAt: string; // ISO string, e.g., "2025-06-20T08:36:37.477Z"
  createdBy: {
    userId: string;
    firstName: string;
    lastName: string;
    avatarUrl: string;
    colorCode: string;
    onlineStatus: number;
  };
}

export interface CreateSupportEmailRequestBody {
  supportEmailAddress: string;
}
