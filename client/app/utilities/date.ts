export function isValidDate(year: number, month: number, day: number): boolean {
    const d = new Date(year, month, day);

    if (d.getFullYear() == year && d.getMonth() == month && d.getDate() == day) {
        return true;
    }
    return false;
}
