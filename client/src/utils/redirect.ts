export default function redirect(link: string) {
    return () => location.href = link;
}