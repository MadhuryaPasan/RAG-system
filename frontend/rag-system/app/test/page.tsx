import {apiFetch} from "@/lib/api";
export default async function test() {
    const data = await apiFetch('/')
  return (
    <div>
      <div className="text-3xl">This is the test pffage</div>
      <br />
      <div>{data.Message}</div>
    </div>
    
  );
}
