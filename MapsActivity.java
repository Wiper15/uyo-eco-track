public class MapsActivity extends FragmentActivity implements OnMapReadyCallback {
    private GoogleMap mMap;
    private FirebaseFirestore db = FirebaseFirestore.getInstance();

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_maps);
        SupportMapFragment mapFragment = (SupportMapFragment) getSupportFragmentManager()
                .findFragmentById(R.id.map);
        mapFragment.getMapAsync(this);
    }

    @Override
    public void onMapReady(GoogleMap googleMap) {
        mMap = googleMap;
        // Coordinates for Uyo, Nigeria
        LatLng uyo = new LatLng(5.0317, 7.9147);
        mMap.addMarker(new MarkerOptions().position(uyo).title("Waste Tracker: Uyo"));
        mMap.moveCamera(CameraUpdateFactory.newLatLngZoom(uyo, 12.0f));
    }
}
