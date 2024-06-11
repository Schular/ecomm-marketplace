declare global {
  interface Window {
    Clerk: {
      session?: {
        getToken: ({ template }: { template: string }) => Promise<string>;
      };
    };
  }
}

export {};
