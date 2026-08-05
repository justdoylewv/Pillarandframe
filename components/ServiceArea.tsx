import {
  SERVICE_AREA_SENTENCE,
  SERVICE_AREA_TOWNS,
} from "@/lib/content/site";

/**
 * Where we work, in the exact words used on the Google Business Profile and
 * everywhere else. The town list renders only once it has been filled in from
 * the profile, so the site never claims a service area the profile does not.
 */
export default function ServiceArea({ dark = false }: { dark?: boolean }) {
  return (
    <div>
      <p
        className={`font-serif text-2xl leading-snug md:text-3xl ${
          dark ? "text-paper" : "text-black"
        }`}
      >
        {SERVICE_AREA_SENTENCE}
      </p>
      {SERVICE_AREA_TOWNS.length > 0 && (
        <p
          className={`mt-6 text-base leading-relaxed ${
            dark ? "text-ash-300" : "text-ash-700"
          }`}
        >
          {SERVICE_AREA_TOWNS.join(" · ")}
        </p>
      )}
    </div>
  );
}
