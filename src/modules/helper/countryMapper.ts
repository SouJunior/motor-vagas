import { capitalizedString } from './delay';

export function companyLogoMapper(location: string) {
  if (!location) { // Verificação para lidar com localizações indefinidas ou nulas
    return '🏳️ Unknown'; // Retorna uma bandeira genérica e texto para localizações desconhecidas
  }

  const countryLogo = {
    brazil: "BR",
    netherlands: '🇳🇱',
    'united kingdom': '🇬🇧',
    finland: '🇫🇮',
    sweden: '🇸🇪',
    france: '🇫🇷',
    denmark: '🇩🇰', 
  };

  const country = location.toLocaleLowerCase().split(',');
  const countryName = country[country.length - 1].trim();
  const logo = countryLogo[countryName as keyof typeof countryLogo] ?? '🏳️'; // Usa '🏳️' para países não mapeados
  return `${logo} ${capitalizedString(countryName)}`; // Retorna a bandeira e o nome do país capitalizado
}
