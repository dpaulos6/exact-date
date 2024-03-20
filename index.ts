function exactAge(dob: string | Date): number {
  const dobDate: Date = typeof dob === 'string' ? new Date(dob) : dob;
  const currentDate: Date = new Date();
  const diff_ms: number = currentDate.getTime() - dobDate.getTime();
  const ageInYears: number = diff_ms / (1000 * 60 * 60 * 24 * 365.25);
  return Math.floor(ageInYears);
}

export default exactAge;
