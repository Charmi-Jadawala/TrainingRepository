namespace stringFunctions
{
    export function toCapital(str: string): string{
        return str.toUpperCase();
    }

    function toSmall(str: string): string{
        return str.toLowerCase();
    }

    export function strLength(str: string): number{
        return str.length;
    }
}