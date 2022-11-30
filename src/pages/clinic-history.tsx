import type { NextPage } from "next";
import { HarvestLayout } from "../components/Layout";
import { CameraIcon } from "@heroicons/react/20/solid";
import Head from "next/head";
import Image from "next/future/image";
import Clipboard from "/public/medical-clipboard.jpg";

const ClinicHistory: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HarvestLayout>
        <div className="overflow-hidden bg-white">
          <div className="relative mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
            <div className="absolute top-0 bottom-0 left-3/4 hidden w-screen bg-gray-50 lg:block" />
            <div className="mx-auto max-w-prose text-base lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8">
              <div>
                <h2 className="text-lg font-semibold text-indigo-600">
                  Clinic History
                </h2>
                <h3 className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                  Mission Statement
                </h3>
              </div>
            </div>
            <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
              <div className="relative lg:col-start-2 lg:row-start-1">
                <div className="relative mx-auto max-w-prose text-base lg:max-w-none">
                  <figure>
                    <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                      <Image
                        className="rounded-lg object-cover object-center shadow-lg"
                        src={Clipboard}
                        alt="Harvest Clinic Image"
                        width={1184}
                        height={1376}
                      />
                    </div>
                    <figcaption className="mt-3 flex text-sm text-gray-500">
                      <CameraIcon
                        className="h-5 w-5 flex-none text-gray-400"
                        aria-hidden="true"
                      />
                    </figcaption>
                  </figure>
                </div>
              </div>
              <div className="mt-8 lg:mt-0">
                <div className="mx-auto max-w-prose text-base lg:max-w-none">
                  <p className="text-lg text-gray-500">
                    The Harvest Free Medical Clinic&apos;s ministry is based
                    upon providing this care in the name of the Lord Jesus
                    Christ in order to share His love with you. His greatest
                    love for you, according to God&apos;s Word the Bible, is
                    that God loves you and Christ died for you. This is the
                    heart of the Good News (the Gospel) which God wants you to
                    know and believe for your salvation. His salvation brings
                    forgiveness of sin and eternal life in Heaven with Him. This
                    salvation includes His promise that &quot;I will never leave
                    you nor forsake you&quot; during the many difficulties in
                    your life.
                  </p>
                </div>
                <div className="prose prose-indigo mx-auto mt-5 text-gray-500 lg:col-start-1 lg:row-start-1 lg:max-w-none">
                  <p className="mt-6">
                    <span className="font-bold">
                      &quot;...all have sinned and come short of the glory of
                      God.&quot;
                    </span>{" "}
                    (Romans 3:23). To agree with God about this sad state and
                    acknowledge our own helplessness to do anything about it
                    ourselves is the first step in salvation, which is known as
                    repentance. The person has a true sorrow in his heart for
                    sins committed.
                  </p>
                  <p className="mt-6">
                    <span className="font-bold">
                      &quot;The wages of sin is death, but the gift of God is
                      eternal life through Jesus Christ&quot;
                    </span>{" "}
                    (Romans 6:23). God makes clear that we, as sinners, have
                    earned death, which is eternal life apart from Him in a
                    definite place: Hell. This is because He is a holy, perfect
                    God. However, because of His love He freely offers eternal
                    life.{" "}
                    <span className="underline">
                      How can He make such an offer?
                    </span>
                  </p>
                  <p className="mt-6">
                    <span className="font-bold">
                      &quot;...Christ once suffered for sin, the just for the
                      unjust, that He might bring us to God; He was put to death
                      in the flesh, but then made alive (resurrected) by the
                      Spirit&quot;
                    </span>{" "}
                    (1 Peter 3:18). On the cross, Jesus was suffering for the
                    sins of all mankind. He was the substitute Who took
                    thepenalty for us all. When He brings us to God because of
                    His sacrifice, all our sin is forgiven and we are promised
                    eternity in Heaven.{" "}
                    <span className="underline">
                      Why would He do such a thing?
                    </span>
                  </p>
                  <p className="mt-6">
                    <span className="font-bold">
                      &quot;...God so loved the world that He gave His only
                      begotten Son that whosoever believes in HIM (the Son)
                      shall not perish but have everlasting life&quot;
                    </span>{" "}
                    (John 3:16). Why would God the Father send God the Son to
                    earth to die for our sins? Because He loves each person He
                    has created so much and does not want anything (our sins) to
                    keep us separated from Him and His best blessings.{" "}
                    <span className="underline">What must I do?</span>
                  </p>
                  <p className="mt-6">
                    <span className="font-bold">
                      &quot;By God&apos;s grace, you are saved through
                      faith...it is the gift of God, and not because of your
                      works&quot;
                    </span>{" "}
                    - (Ephesians 2:8-9). I must believe (faith) that
                    Christ&apos;s death and resurrection paid the penalty of my
                    sins...that salvation results from:
                  </p>
                  <ul role="list">
                    <li className="mt-4">
                      <span className="font-bold">I.</span> Accepting the free
                      gift offered by the One who became our substitue in paying
                      this price. He willnot accept good wokrs or deeds in place
                      of His sacrifice.
                    </li>
                    <li className="mt-4">
                      <span className="font-bold">II.</span> &quot;...as many as
                      received Him, to them He gave power to become the sons of
                      God, even to them that belive on His name.&quot; When one
                      believes that Christ&apos;s substitutionary death saves,
                      he then received the Person of Jesus Christ into his
                      heart, the beginning of a personal relationship with Him
                      which lasts forever
                    </li>
                  </ul>
                  <p className="mt-6">
                    There are doctors, nurses, and clerks who would be glad to
                    helpp you understand these most important truths. Toi
                    believe and receive Him is the wanted result. Some feel a
                    prayer is important in which one asks God for salvation
                    based on beliveing and receiving Him. The good thing is He
                    already knows your heart.
                  </p>
                  <h3 className="mt-6">
                    After salvation, there are several important practices to
                    developp.
                  </h3>
                  <ul role="list">
                    <li className="mt-4">
                      <span className="font-bold">1.</span> Learn to pray to God
                      the Father (Christ&apos;s disciples specifically asked Him
                      to teach them how)
                    </li>
                    <li className="mt-4">
                      <span className="font-bold">2.</span> Begin studying the
                      Bible. Consider the Book of John to start. Remember you
                      now have Someone, the Holy Spirit, to help you understand
                      this Book.
                    </li>
                    <li className="mt-4">
                      <span className="font-bold">3.</span> Find a
                      Bible-believing, Bible-teaching church to attend; a church
                      family is very important to love, care, and pray for you.
                      It may be hepful to find a new set of friends.
                    </li>
                    <li className="mt-4">
                      <span className="font-bold">4.</span> Develop a personal
                      testimony involving what truths you came to believe when
                      you were saved.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </HarvestLayout>
    </>
  );
};

export default ClinicHistory;

type TechnologyCardProps = {
  name: string;
  description: string;
  documentation: string;
};

const TechnologyCard = ({
  name,
  description,
  documentation,
}: TechnologyCardProps) => {
  return (
    <section className="flex flex-col justify-center p-6 duration-500 border-2 border-gray-500 rounded shadow-xl motion-safe:hover:scale-105">
      <h2 className="text-lg text-gray-700">{name}</h2>
      <p className="text-sm text-gray-600">{description}</p>
      <a
        className="mt-3 text-sm underline text-violet-500 decoration-dotted underline-offset-2"
        href={documentation}
        target="_blank"
        rel="noreferrer"
      >
        Documentation
      </a>
    </section>
  );
};
