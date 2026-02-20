<?php

namespace App\Http\Controllers\Frontend;

use App\Enums\InterestedIn;
use App\Http\Controllers\Controller;
use App\Mail\ContactRealsateAgentMail;
use App\Mail\ContactSubmissionMail;
use App\Mail\UserContactMail;
use App\Mail\NewsletterMail;
use App\Models\City;
use App\Models\ContactRealsateAgent;
use App\Models\ContactUs;
use App\Models\Listing;
use App\Models\Newsletter;
use App\Models\Rental;
use App\Models\User;
use App\Models\UserContact;
use App\Services\ListingService;
use App\Services\RentalService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;
use Inertia\Response;

class FrontendController extends Controller
{
     public function __construct(private ListingService $service, private RentalService $rentalService) {}

     private function renderCityPage(string $cityName, string $view): Response
     {
          $city = City::where('name', $cityName)->firstOrFail();

          return Inertia::render($view, ['city' => $city]);
     }

     public function index(): Response
     {
          $listings =  $this->service->getPaginatedDatas(
               perPage: 8,
               // filters: []
          );
          return Inertia::render('frontend/index', ['listings' => $listings]);
     }
     public function partnerProgram(): Response
     {
          return Inertia::render('frontend/partnerProgram');
     }
     public function livingInBristol(): Response
     {
          return $this->renderCityPage('Bristol', 'frontend/livingInBristol');
     }
     public function rentingTennessee(): Response
     {
          return Inertia::render('frontend/rentingTennessee');
     }

     public function livingInChattanooga(): Response
     {
          return $this->renderCityPage('Chattanooga', 'frontend/living-in-chattanooga');
     }

     public function homesForSale(Request $request): Response
     {
          $filters = $request->only([
               'search',
               'city',
               'price_min',
               'price_max',
               'bedrooms',
               'bathrooms',
               // 'sqft_min',
               'square_feet',
               'property_type'
          ]);

          $listings = $this->service->getPaginatedDatas(
               perPage: 6,
               filters: $filters
          );

          $cities = City::orderBy('name')->get();

          return Inertia::render('frontend/homes-for-sale', [
               'listings' => $listings,
               'cities' => $cities,
               'filters' => $filters
          ]);
     }
     public function movingChecklist(): Response
     {
          return Inertia::render('frontend/moving-checklist');
     }
     public function rentals(Request $request): Response
     {

          $filters = $request->only([
               'search',
               'city',
               'price_min',
               'price_max',
               'bedrooms',
               'bathrooms',
               // 'sqft_min',
               'square_feet',
               'property_type'
          ]);
          $cities = City::all();

          $rentals = $this->rentalService->getPaginatedDatas(
               perPage: 6,
               filters: $filters
          );
          return Inertia::render('frontend/rentals', [
               'rentals' => $rentals,
               'filters' => $filters,
               'cities' => $cities
          ]);
     }
     public function cityComparison(): Response
     {
          return Inertia::render('frontend/city-comparison');
     }
     public function realEstateAgents(): Response
     {
          // Get users and encrypt their IDs
          $owners = User::where('user_type', 'property_owner')
               ->get()
               ->map(function ($user) {
                    return [
                         'id' => Crypt::encryptString($user->id),
                         'name' => $user->name,
                         'email' => $user->email,
                         'phone' => $user->phone,
                         'image_url' => $user->image_url,
                         'your_self' => $user->your_self,

                    ];
               });

          $realtors = User::where('user_type', 'realtor')
               ->get()
               ->map(function ($user) {
                    return [
                         'id' => Crypt::encryptString($user->id),
                         'name' => $user->name,
                         'email' => $user->email,
                         'phone' => $user->phone,
                         'image_url' => $user->image_url,
                         'your_self' => $user->your_self,
                    ];
               });

          $boths = User::where('user_type', 'both')
               ->get()
               ->map(function ($user) {
                    return [
                         'id' => Crypt::encryptString($user->id),
                         'name' => $user->name,
                         'email' => $user->email,
                         'phone' => $user->phone,
                         'image_url' => $user->image_url,
                         'your_self' => $user->your_self,
                    ];
               });

          return Inertia::render('frontend/real-estate-agents', [
               'owners' => $owners,
               'realtors' => $realtors,
               'boths' => $boths
          ]);
     }
     public function whyTennessee(): Response
     {
          return Inertia::render('frontend/why-tennessee');
     }
     public function tennesseeRelocation(): Response
     {
          return Inertia::render('frontend/tennessee-relocation');
     }
     // public function singleProduct(Request $request, $id): Response
     // {
     //      $listing = $this->service->findData($id);
     //      $facilitiesShow = $listing->property_type === 'rental' ? true : false;

     // }

     public function singleListingProduct($listing_id = null)
     {
          if ($listing_id) {
               $listing = $this->service->findData($listing_id);
          }
          $relatedListings = $this->service->getPaginatedDatas(
               perPage: 6,
               filters: []
          );

          return Inertia::render('frontend/single-product', [
               'listing' => $listing,
               'listingType' => 'listing'
          ]);
     }
     public function singleRentalProduct($rental_id)
     {
          if ($rental_id) {
               $listing = Rental::findOrFail($rental_id)->load(['city', 'user', 'galleries', 'facilities']);
          }

          return Inertia::render('frontend/single-product', [
               'listing' => $listing,
               'listingType' => 'rental'
          ]);
     }

     public function livetennessee(): Response
     {
          return Inertia::render('frontend/live-tennessee');
     }
     public function rentingBuy(): Response
     {
          return Inertia::render('frontend/renting-buy');
     }
     public function livingInNashville(): Response
     {
          return $this->renderCityPage('Nashville', 'frontend/living-in-nashville');
     }
     public function costOfRentingTennessee(): Response
     {
          return Inertia::render('frontend/cost-of-renting-tennessee');
     }
     public function movingTennesseeRenting(): Response
     {
          return Inertia::render('frontend/moving-tennessee-renting');
     }
     public function livingInCookeville(): Response
     {
          return $this->renderCityPage('Cookeville', 'frontend/living-in-cookeville');
     }
     public function livingInKnoxville(): Response
     {
          return $this->renderCityPage('Knoxville', 'frontend/living-in-knoxville');
     }
     public function livingInJohnsonCity(): Response
     {
          return $this->renderCityPage('Johnson City', 'frontend/living-in-johnson-city');
     }
     public function livingInFranklin(): Response
     {
          return $this->renderCityPage('Franklin', 'frontend/living-in-franklin');
     }
     public function livingInMemphis(): Response
     {
          return $this->renderCityPage('Memphis', 'frontend/living-in-memphis');
     }
     public function livingInClarksville(): Response
     {
          return $this->renderCityPage('Clarksville', 'frontend/living-in-clarksville');
     }
     public function livingInMurfreesboro(): Response
     {
          return $this->renderCityPage('Murfreesboro', 'frontend/living-in-murfreesboro');
     }
     public function livingInKingsport(): Response
     {
          return $this->renderCityPage('Kingsport', 'frontend/living-in-kingsport');
     }
     public function livingInJackson(): Response
     {
          return $this->renderCityPage('Jackson', 'frontend/living-in-jackson');
     }
     public function costOfLivingInTennessee(): Response
     {
          return Inertia::render('frontend/cost-of-living-in-tennessee');
     }
     public function prosConsTennessee(): Response
     {
          return Inertia::render('frontend/pros-cons-tn');
     }

     public function privacyPolicy(): Response
     {
          return Inertia::render('frontend/privacy-policy');
     }

     public function userDetails($id): Response
     {
          try {
               $decryptedId = Crypt::decryptString($id);
               $user = User::findOrFail($decryptedId);
               $listings = Listing::where('user_id', $decryptedId)
                    ->with(['city', 'galleries'])
                    ->get();
               // dd($listings);

               return Inertia::render('frontend/user-details', [
                    'user' => $user,
                    'listings' => $listings
               ]);
          } catch (\Exception $e) {
               abort(404);
          }
     }
     public function submitRequest(Request $request)
     {
          $request->validate([
               'name'  => 'required|string|max:255',
               'email' => 'required|email',
               'phone' => 'nullable|string|max:20',
               'listing_id' => 'required|integer',
          ]);

          $listing = Listing::with('user')->findOrFail($request->listing_id);
          $owner   = $listing->user;
          ContactRealsateAgent::create([
               'name' => $request->name,
               'email' => $request->email,
               'phone' => $request->phone,
               'listing_id' => $listing->id,
               'realstate_agent_id' => $owner->id,
          ]);
          $data = [
               'name'  => $request->name,
               'email' => $request->email,
               'phone' => $request->phone,
               'title' => $listing->title,
               'purchase_price' => $listing->purchase_price,
               'owner_name' => $owner->name,
          ];

          Mail::to($owner->email)->send(new ContactRealsateAgentMail($data));

          return redirect()->back()->with('success', 'Request sent!');
     }


     public function userContact(Request $request)
     {
          $data = $request->validate([
               'name'     => 'required|string|max:255',
               'email'    => 'required|email',
               'message'  => 'required|string',
               'user_id' => 'required|exists:users,id',
          ]);
          $user = User::findOrFail($data['user_id']);

          UserContact::create([
               'name'     => $data['name'],
               'email'    => $data['email'],
               'message'  => $data['message'],
               'user_id' => $data['user_id'],
          ]);

          $mailData = [
               'name'  => $data['name'],
               'email' => $data['email'],
               'message_body'  => $data['message'],
               'user_name'    => $user->name,
          ];


          Mail::to($user->email)->send(new UserContactMail($mailData));

          return back()->with('success', 'Request sent successfully!');
     }

     public function getInTouch(): Response
     {
          $cities = City::all();
          return Inertia::render('frontend/get-in-touch', [
               'cities' => $cities,
               'interested_in_options' => collect(InterestedIn::cases())->map(fn($status) => [
                    'value' => $status->value,
                    'label' => $status->label(),
               ])
          ]);
     }
     public function submitGetInTouch(Request $request)
     {
          $validated = $request->validate([
               'full_name'      => ['required', 'string', 'max:255'],
               'phone_number'   => ['required', 'string', 'max:20'],
               'email'          => ['required', 'email', 'max:255'],
               'interested_in'  => ['required', 'string'],
               'city_id'        => ['required', 'exists:cities,id'],
               'message'        => ['required', 'string'],
               'is_confirmed'   => ['accepted'],
          ]);

          $city = City::find($validated['city_id']);

          $contact = ContactUs::create([
               'full_name'      => $validated['full_name'],
               'phone_number'   => $validated['phone_number'],
               'email'          => $validated['email'],
               'interested_in'  => $validated['interested_in'],
               'city_id'        => $validated['city_id'],
               'message'        => $validated['message'],
               'is_confirmed'   => true,
          ]);

          Mail::to(config('mail.from.address')) // or your admin email
               ->send(new ContactSubmissionMail($contact, $city));

          return back()->with('success', 'Your message has been sent successfully!');
     }

     public function listRentalProperty(): Response
     {
          return Inertia::render('frontend/list-rental-property');
     }

     public function submitNewsletter(Request $request)
     {
          $validated = $request->validate([
               'email'          => ['required', 'email', 'max:255'],
          ]);

          $newsletter = Newsletter::create([
               'email'          => $validated['email'],

          ]);

          Mail::to(config('mail.from.address'))
               ->send(new NewsletterMail($newsletter));

          return back()->with('success', 'Your email has been sent successfully!');
     }

     public function buying(): Response
     {
          return Inertia::render('frontend/buying');
     }
}
